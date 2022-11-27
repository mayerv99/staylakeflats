import styled from "styled-components";

import ponte from "../../assets/imgs/pontejk.jpeg";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${ponte});
  background-size: cover;
  background-position: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;

  h1 {
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 64px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  p {
    color: white;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 40px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
  color: white;

  img {
    width: 32px;
  }

  div {
    display: flex;
    align-items: flex-end;
    font-size: 24px;
    font-weight: 400;
  }
`;
