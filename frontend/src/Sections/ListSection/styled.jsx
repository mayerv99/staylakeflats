import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 69vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6);
`;

export const Text = styled.div`
  width: 50%;

  header {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    line-height: 40px;
    color: #919191;
    letter-spacing: 0.5px;
  }
`;
