'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';
import future_banner from '../../../../public/images/452965192_1014476283569552_1662655706651365670_n.jpg';
import future_mobile_banner from '../../../../public/images/452965192_1014476283569552_1662655706651365670_n.jpg';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
  Charts,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
  statTitleMobile,
  statTitleDesktop,
  statSubTitleDesktop,
  statSubTitleMobile,
  chartData
} from './constants';
// import Piechart from '@/components/Common/Chart/PieChart';
// import PolarChart from '@/components/Common/Chart/PolarChart';

gsap.registerPlugin(ScrollTrigger);

const FinancialFuture = () => {
  const isMobile = useIsMobile();
  const cardContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = cardContainerRef.current;
    const cards = container?.children;

    // if (container) {
    //   gsap.to(container, {
    //     xPercent: -100 * ((cards?.length || 0) - 1), // Scroll through all cards
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: container,
    //       start: 'top top',
    //       // end: () => `+=${container.scrollWidth}`, // Adjust end based on scroll width
    //       end: "50%",
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1,
    //     },
    //   });
    // }
  }, []);

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <div>
              <MaskText phrases={mobileHeaderPhrase} tag="h2" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </div>
          ) : (
            <div>
              <MaskText phrases={desktopHeaderPhrase} tag="h2" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </div>
          )}
        </Header>
        <CardContainer ref={cardContainerRef}>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn>
                <Image src={info.icon} alt="icon" />
              </SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Header>
          {isMobile ? (
            <div>
              <MaskText phrases={statTitleMobile} tag="h2" />
              <MaskText phrases={statSubTitleMobile} tag="p" />
            </div>
          ) : (
            <div>
              <MaskText phrases={statTitleDesktop} tag="h2" />
              <MaskText phrases={statSubTitleDesktop} tag="p" />
            </div>
          )}
        </Header>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h2" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
              <MaskText phrases={new Array(stat.percentage)} tag="h3" />
            </Stat>
          ))}
        </Stats>
        <div>
             {/* <Charts>
                <Piechart data={chartData} /> 
                <PolarChart stats={stats} />
            </Charts> */}
          </div>
        
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner>
    </Wrapper>
  );
};

export default FinancialFuture;