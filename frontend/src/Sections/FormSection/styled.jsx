import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`;

export const Form = styled.div`
  width: 100%;
  header {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;
  }
`;

export const IconsList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
`;

export const IconCard = styled.div`
  width: 17%;
  height: 380px;
  border: 1px solid #f1f1f1;

  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;

  img {
    width: 50px;
    transition: 1s ease-in;
  }

  div {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    height: 50%;
    width: 100%;
    text-align: right;
    transform: translateX(150%);
    transition: 0.75s ease-in;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    background-image: ${(props) => props.background && props.background};
    button {
      border: 1px solid transparent;
      padding: 10px 50px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  :hover {
    img {
      transform: translateY(-200%);
    }

    div {
      transform: translateX(0);
      color: white;
    }
  }
`;
