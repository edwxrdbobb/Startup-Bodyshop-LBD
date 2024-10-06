
import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 100px;  // Adjust this for the amount of "peek" you want on either side
`;

export const SlideItem = styled.div`
  width: 30%; // Ensure each slide takes up less than full view to allow space for the adjacent slides to peek through
  margin: 0 10px; // Add spacing between slides to achieve the partial view
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 10px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlideNumber = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 255, 0.7);
  padding: 5px 10px;
  border-radius: 50%;
`;

export const SlideTitle = styled.h2`
  position: absolute;
  top: 50px;
  left: 20px;
  font-size: 36px;
  color: white;
`;

export const SlideDescription = styled.p`
  position: absolute;
  bottom: 50px;
  left: 20px;
  font-size: 18px;
  color: white;
  max-width: 80%;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`;