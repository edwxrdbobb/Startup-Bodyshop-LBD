'use client';
import Image from 'next/image';

import big_banner from '../../../../public/images/452530363_1014476256902888_5421656089868291729_n.jpg';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div, StyledIframe, Header } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { image_urls } from './constants'; // Import the image URLs
import { Slider } from './styles'; // Import the new Slider style
import MaskText from '@/components/Common/MaskText';

export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {/* {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner} alt="big_banner" fill />
            )} */}
              <StyledIframe 
                style={{width: '100%', height: '100%', filter: 'grayscale(1)'}}
                src="https://www.youtube.com/embed/smOiNId0nBs?si=JYgNFIX8H_bLsJok" 
                title="YouTube video player" 
                frameBorder={0} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
          </Div>
        </ImageContainer>
        <Header>
            <MaskText phrases={new Array('Partners & Sponsors')} tag="h3" />
        </Header>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

// const ImageSlider = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   let currentIndex = 0;

//   useEffect(() => {
//     const totalImages = image_urls.length;

//     const animateSlider = () => {
//       currentIndex = (currentIndex + 1) % totalImages;
//       gsap.to(sliderRef.current, {
//         x: -currentIndex * 100 + '%',
//         duration: 0.5,
//         ease: 'power1.inOut',
//       });
//     };

//     const interval = setInterval(animateSlider, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <ImageContainer>
//       <Slider ref={sliderRef}>
//         {image_urls.map((url, index) => (
//           <img key={index} src={url} alt={`slider_image_${index}`} />
//         ))}
//       </Slider>
//     </ImageContainer>
//   );
// };

export default Featured;
