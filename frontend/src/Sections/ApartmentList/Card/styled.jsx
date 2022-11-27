import styled from "styled-components";

export const Wrapper = styled.li`
  width: 15%;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  height: 300px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
  }

  footer {
    text-align: right;
    color: #919191;

    strong {
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

export const Header = styled.div`
  text-align: left;
  font-size: 20px;
  width: 100%;
`;
