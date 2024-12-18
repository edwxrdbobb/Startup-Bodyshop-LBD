'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 5.2rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

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

export const ImageCtn = styled.div`
  margin: 3rem auto 0;
  position: relative;
  display: flex;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    background: linear-gradient(180deg, rgba(19, 19, 19, 0) 0%, var(link-color) 90%);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    filter: opacity(0.5)
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin: 0.32rem auto 0;

    &::after {
      top: 30px;
    }

    img {
      width: 90%;
      margin: 0 auto;
      object-fit: contain;
    }
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem;
  padding-top: 3.25rem;
  max-width: 32.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 3.15rem;
    color:white;

  }

  p {
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
    filter: opacity(0.8);
      
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  &:last-child {
    margin-top: 2rem;

    div:first-child {
    
      ${ImageCtn} {
        margin-top: 1.7rem;
        flex: 1;
      }

      ${TextCtn} {
        height: 1em;
        flex: 1;
      }
    }

    div:last-child {
      flex: 2;

      ${ImageCtn} {
        margin-top: 5.7rem;
        flex: 1;
        margin-left: auto;
      }

      ${TextCtn} {
        height: 1em;
        flex: 1;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:last-child {
      div:first-child {
        flex: 1;

        ${ImageCtn} {
          margin-top: 1.78rem;
          flex: 1;
        }

        ${TextCtn} {
          margin-top: 4rem;
        }
      }

      div:last-child {
        flex: 1;

        ${ImageCtn} {
          margin-top: 5.7rem;
          flex: 1;
          margin-left: auto;
        }

        ${TextCtn} {
          margin-top: 2rem;
        }
      }
    }
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  height: 32.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  background: url(${grid_background.src}) var(--sky-blue) no-repeat;

  &:first-child {
    flex: 2;
    background-color: #f4f4f4;

    h2{
      color: var(--text-black)
    }

    p{
      color: var(--text-black)
    }
    
  }

  &:nth-child(2) {
    flex: 1;

    ${ImageCtn} {
      margin-left: 2.5rem;
      width: 100%;
    }
  }
`;
