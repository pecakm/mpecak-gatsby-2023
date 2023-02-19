import styled from 'styled-components';

export const Container = styled.div``;

export const SliderWrapper = styled.div`
  margin-top: 40px;

  .react-slideshow-container .nav:first-of-type {
    left: 10px;

    svg {
      position: relative;
      left: -1px;
    }
  }

  .react-slideshow-container .nav:last-of-type {
    right: 10px;

    svg {
      position: relative;
      right: -1px;
    }
  }
`;
