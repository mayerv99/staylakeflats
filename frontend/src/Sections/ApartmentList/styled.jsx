import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  header {
    text-align: center;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 32px;
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
`;
