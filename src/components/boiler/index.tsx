// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { gsap } from 'gsap';
// import CustomWiggle from '@gsap/plugin-customWiggle';

// gsap.registerPlugin(CustomWiggle);

// // Styled Components for the SVG and other elements
// const SVGWrapper = styled.svg`
//   width: 100%;
//   height: 100%;
//   visibility: hidden;
// `;

// const BodyWrapper = styled.div`
//   background-color: var(--bg-color);
//   overflow: hidden;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
// `;

// const LiquidStyle = styled.polygon`
//   fill: var(--main-color);
// `;

// const BubbleGroup = styled.g`
//   stroke: var(--main-color);
//   fill: #222932;
// `;

// const PolyStyle = styled.use`
//   fill: #3A86FF;
// `;

// const Flask = styled.g`
//   opacity: 0.5;
//   fill: #003459;
//   stroke: #003459;
// `;

// // Main Component
// const LiquidAnimation = () => {
//   useEffect(() => {
//     const mainSVG = document.querySelector('.mainSVG') as SVGSVGElement;
//     const liquid = document.querySelector('#liquid') as SVGPolygonElement;
//     const pointArray: SVGPoint[] = [];
//     const pointValueXArray: number[] = [];
//     const pointValueYArray: number[] = [];
//     const liquidWidth = 300;
//     const numPoints = 30;
//     const startValX = 250;
//     const startValY = 400;
//     const colorArray = ['#E6098B', '#FFBE0B', '#FB5607', '#8338EC', '#3A86FF', '#51E5FF', '#04A777', '#F75C03', '#F71735'];
//     const allBubbles = gsap.utils.toArray('#bubbleGroup rect');

//     gsap.set(mainSVG, { visibility: 'visible' });
//     gsap.set('.darkLiquid', { scaleX: -1, transformOrigin: '50% 50%' });

//     for (let i = 0; i < numPoints; i++) {
//       const p = liquid!.points.appendItem(mainSVG.createSVGPoint());
//       pointArray.push(p);
//       pointValueXArray.push(i < numPoints - 2 ? startValX : i === numPoints - 2 ? 600 : 200);
//       startValX += liquidWidth / (numPoints - 2);
//       pointValueYArray.push(i < numPoints - 2 ? startValY : 800);
//     }

//     gsap.set(pointArray, {
//       x: gsap.utils.wrap(pointValueXArray),
//       y: gsap.utils.wrap(pointValueYArray),
//     });

//     gsap.set('#level', { transformOrigin: '50% 100%' });
//     gsap.set('#bubbleGroup rect, #droplet', { transformOrigin: '50% 50%' });

//     gsap.fromTo(
//       allBubbles,
//       { x: 'random(0, 200)', y: 'random(0, 120)', scale: 'random(0.5, 3)', rotation: 'random(20, 180)', opacity: 1 },
//       {
//         duration: 1,
//         rotation: 'random(180, 360)',
//         repeatRefresh: true,
//         stagger: { each: 0.52, repeat: -1 },
//         scale: 0.1,
//         y: '-=30',
//         opacity: 0.1,
//       }
//     ).seek(100);

//     const makeDrip = () => {
//       const currentColor = gsap.utils.random(colorArray);
//       gsap.to(':root', { '--main-color': currentColor });

//       const tl = gsap.timeline({
//         defaults: {
//           ease: CustomWiggle.create('', { type: 'easeOut', wiggles: gsap.utils.random(9, 12) }),
//         },
//       });

//       tl.fromTo('#pipette1', { x: 600, opacity: 0 }, { duration: 1, x: 376, opacity: 1, ease: 'expo.inOut' })
//         .fromTo(
//           '#pipette1',
//           { rotation: -95, transformOrigin: '50% 100%' },
//           { rotation: 0, transformOrigin: '50% 100%', duration: 1.5, ease: 'elastic(1.5, 0.83)' },
//           0
//         )
//         .addLabel('pipetteReady')
//         .fromTo('#drip', { scale: 0 }, { duration: 1, scale: 1, transformOrigin: '50% 0%', ease: 'elastic(1, 0.8)' })
//         .to('#level', { duration: 1, scaleY: 0.5, ease: 'elastic(1, 0.8)' }, 'pipetteReady')
//         .fromTo('#drip', { x: 399, y: 155 }, { x: 399, y: 430, duration: 0.38, ease: 'power1.in' })
//         .addLabel('splash')
//         .to('.poly', { fill: currentColor, ease: 'sine' }, 'splash')
//         .to('#bubbleGroup', { stroke: currentColor, ease: 'sine' }, 'splash');

//       gsap.delayedCall(4, makeDrip);
//     };

//     makeDrip();
//   }, []);

//   return (
//     <BodyWrapper>
//       <SVGWrapper className="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
//         {/* Add all the SVG elements from your original HTML */}
//         <g id="pipette1" className="glass" fill="none" stroke="#aaccfb" strokeMiterlimit="10" strokeWidth="4" transform="translate(0, 38)">
//           <LiquidStyle id="liquid" points="34.28 79.01 34.28 94.68 27.91 104.62 27.91 111.41 23.32 114 18.73 111.41 18.73 104.62 12.36 94.68 12.36 79.01" />
//           <rect id="level" className="liquid" stroke="none" x="12.36" y="48.05" width="22" height="32" fill="#5299f9" />
//         </g>

//         <Flask id="flask" className="glass" />
//         {/* Add the remaining elements */}
//       </SVGWrapper>
//     </BodyWrapper>
//   );
// };

// export default LiquidAnimation;
