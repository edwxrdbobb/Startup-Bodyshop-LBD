'use client';
import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';

export const Wrapper = styled.section`
  padding-top: 7.75rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
// export const Card = styled.div`
//   height: 30.875rem;
//   border-radius: 0.75rem;
//   position: relative;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover; 
//     background: #131313;
//     border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
//     border-radius: 15px;
//     filter: grayscale(1); // Start with grayscale
//     transition: filter ;
//     cursor: pointer;
//   }

//   &:hover img {
//     filter: grayscale(0); // Remove grayscale on hover

//   }

//   @media (max-width: 768px) {
//     height: 27.5rem;
//   }
// `;

// export const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr); 
//   gap: .8rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; 
//     gap: 2rem;
//   }

//   // Blur and grayscale effect for other cards when one is hovered
//   &:hover ${Card} {
//     filter: blur(3px) grayscale(0.8); // Applies blur and grayscale to all cards
//     transition: filter 400ms;
//     transform: scale(0.8);
//   }

//   ${Card}:hover {
//     filter: blur(0) grayscale(0); // Removes blur and grayscale on the hovered card
//     transform: scale(1);
//   }

//   ${Card}:hover ~ ${Card} {
//     filter: blur(3px) grayscale(0.8); // Keeps the blur and grayscale effect on siblings
//     transform: scale(0.85);
//   }
// `;

export const Card = styled.div`
  height: 30.875rem;
  border-radius: 0.75rem;
  position: relative;
  transition: transform 400ms ease, filter 400ms ease; // Smooth transition for scaling and filter

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #131313;
    border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
    border-radius: 15px;
    filter: grayscale(1); // Start with grayscale
    transition: filter 400ms ease, transform 400ms ease; // Smooth transition for image grayscale
    cursor: pointer;
  }

  &:hover img {
    filter: grayscale(0); // Remove grayscale on hover
    transform: scale(1.05); // Slightly scale the hovered card image
  }

  @media (max-width: 768px) {
    height: 27.5rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  // Apply blur and scaling effect for other cards when one is hovered
  &:hover ${Card} {
    filter: blur(3px) grayscale(0.8); // Applies blur and grayscale to all cards
    transition: transform 400ms ease, filter 400ms ease; // Apply smooth transition to all cards
  }

  ${Card}:hover {
    filter: blur(0) grayscale(0); // Remove blur and grayscale on the hovered card
    transform: scale(1.0); // Scale up the hovered card slightly
  }

  ${Card}:hover ~ ${Card}, ${Card}:hover + ${Card} {
    filter: blur(3px) grayscale(0.8); // Apply blur and grayscale to non-hovered cards
    transform: scale(0.85); // Slightly scale down the non-hovered cards
    transition: transform 400ms ease, filter 400ms ease; // Smooth transition for non-hovered cards
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32.25rem;
  // margin: 1.25rem 2.25rem 1.94rem 2.25rem;


  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.75rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 1.5rem 1.75rem 1.5rem;

    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const SVGCtn = styled.div`
  background: url(${card_grid.src});
  height: 24.55rem;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    height: 15.28219rem;
    background-position: center center;
    background-size: contain;

    img {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
`;

export const Stats = styled.div`
  margin: 6.25rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3.75rem auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

// export const Number = styled.h1`
//   font-size: 5rem;
//   font-weight: 600;
// `;

// export const SubTitle = styled.p`
//   color: var(--link-color);
//   font-size: 1.125rem;
//   font-weight: 500;
//   text-transform: uppercase;
// `;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 31.25rem;
    img {
      object-fit: contain;
    }
  }
`;
