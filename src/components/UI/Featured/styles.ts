'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div`
 

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 3.75rem;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  width: 90%;
  overflow: hidden;
  border-radius: 0.75rem;
  padding: 2rem 1rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    img {
      height: 23.75rem;
    }
  }
`;

export const ParallaxImages = styled.div`
    position: relative;
    max-width: 53.7rem;
    margin: 3rem auto 0;
    filter: grayscale(1);

  img{
    filter: invert(1)
  }
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 35rem;
  overflow: hidden;
  flex: 1;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    background: linear-gradient(180deg, rgba(19, 19, 19, 0) 0%, #131313 105%);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

  @media (max-width: 599px) {
    height: 23.75rem;
    
     img {
      object-fit: cover;
     }
  }
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const StyledIframe = styled.iframe`
  width: 560px;
  height: 315px;
  filter: grayscale(1);
`;


export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;
  padding-top: 2rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
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
