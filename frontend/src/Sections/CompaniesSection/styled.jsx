import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  height: 20vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const slidingAnimation = keyframes`
    0%{
        transform: translateY(0%)
    }
    50% {
        transform: translateY(-5%)
    }
    100% {
        transform: translateY(0%)
    }
`;

export const ItemDiv = styled.div`
  line-height: 64px;
  font-size: 64px;
  display: flex;
  flex-direction: row;
  gap: 5px;

  img {
    /* animation: ${slidingAnimation} 1s infinite; */
    height: ${(props) => props.iconSize && props.iconSize};
  }
`;
