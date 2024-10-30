'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;
export const InnerTwo = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: var(--sky-blue);
  border-radius: 12px;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
  text-align: center;

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
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: -15rem;
  margin:-15rem  3rem auto 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AddedEdges = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: -15rem;
  margin:-15rem  3rem auto 3rem;

  &:first-child {

    div:last-child{
      // transform: rotateZ(5deg);
    }
    
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const BriefNoteCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  border-radius: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  padding: 2.35rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  position: relative;
  background: radial-gradient(800px circle at 20px 16px, hsl(194.4deg 79.15% 36.74% / 20%), rgb(33 42 100 / 10%) 40%)
  overflow: hidden;
  backdrop-filter: blur(10px); /* Glass effect */
  box-shadow: 0 4px 30px rgba(255, 200, 235, 0.1)
  

  li {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
 
`;

export const AddedEdge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  padding: 2.35rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  position: relative;
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,0.333858543417367) 0%, rgba(16,9,121,0.6363795518207283) 84%, rgba(0,212,255,0.33665966386554624) 100%);
  overflow: hidden;
  backdrop-filter: blur(10px); /* Glass effect */
  box-shadow: 0 4px 30px rgba(255, 200, 235, 0.1)
  


  li {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
 
`;

export const Title = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
  }
`;

export const BriefNote = styled.div`
  max-height: 54.75rem;
  padding: 8.25rem 4.5rem;
  display: flex;

  p {
    color: var(--dark-text);
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 14px;
  }

  h3 {
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 500;
    
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;

export const BriefNoteCoverImg = styled.div`
  
  padding: 8.25rem 4.5rem;
  position: relative;
  display: flex;
  
 
  img{
    border-radius: 0;
    width: 350px;
    height: 280px;
    filter: invert(1);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;
