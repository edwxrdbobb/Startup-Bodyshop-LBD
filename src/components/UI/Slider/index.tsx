"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { sliderItems } from './constants';
import { SliderContainer, SlideItem, SlideContent, SlideNumber, SlideTitle, SlideDescription, NavigationButton } from './styles';
import Image from 'next/image';

gsap.registerPlugin(Draggable);

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const slides = slideRefs.current;
    const numSlides = slides.length;

    gsap.set(slides, { xPercent: i => i * 100 });

    const animation = gsap.to(slides, {
      xPercent: -100 * (numSlides - 1),
      ease: "none",
      paused: true
    });

    const proxy = document.createElement("div");
    const slideWidth = 100 / numSlides;
    const wrapWidth = numSlides * slideWidth;

    gsap.set(proxy, { x: 0 });

    const draggable = new Draggable(proxy, {
        trigger: slider,
        inertia: true,
        onPress: updateDraggable,
        onDrag: updateProgress,
        onThrowUpdate: updateProgress,
        snap: {
          x: gsap.utils.snap(slideWidth)  // Ensure this snaps correctly based on your padding/margins
        }
      });
      

    window.addEventListener("resize", resize);

    function updateDraggable(this: any) { // Specify the correct type for 'this'
        animation.progress(gsap.utils.wrap(0, 1, this.x / wrapWidth));
    }

    function animateSlides(direction: number) {
      gsap.to(proxy, {
        duration: 0.5,
        x: `-=${direction * slideWidth}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % wrapWidth)
        },
        onUpdate: updateProgress
      });
    }

    function updateProgress() {
        const xPosition = gsap.getProperty(proxy, "x") as number; // Ensure x is treated as a number
        animation.progress(gsap.utils.wrap(0, 1, xPosition / wrapWidth));
        setCurrentIndex(Math.round(animation.progress() * (numSlides - 1)));
    }     

    function resize() {
      const norm = (gsap.getProperty(proxy, "x") as number) / wrapWidth || 0;
      gsap.set(proxy, { x: norm * slides.length * slideWidth });
      animateSlides(0);
    }

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const direction = (e.target as HTMLElement).classList.contains('next') ? -1 : 1;
        animateSlides(direction);
      });
    });

    resize();

    return () => {
      draggable.kill();
      window.removeEventListener("resize", resize);
      navButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <SliderContainer>
      <div ref={sliderRef} style={{ display: 'flex', width: `${sliderItems.length * 100}%` }}>
        {sliderItems.map((item, index) => (
          <SlideItem key={item.id} ref={el => (slideRefs.current[index] = el)}>
            <SlideContent>
                <Image src={item.imageUrl} alt={item.title} />
              {/* <SlideImage src={item.imageUrl} alt={item.title} /> */}
              <SlideNumber>{item.id}</SlideNumber>
              <SlideTitle>{item.title}</SlideTitle>
              <SlideDescription>{item.description}</SlideDescription>
            </SlideContent>
          </SlideItem>
        ))}
      </div>
      <NavigationButton className="nav-button prev">&lt;</NavigationButton>
      <NavigationButton className="nav-button next">&gt;</NavigationButton>
    </SliderContainer>
  );
};

export default Slider;
