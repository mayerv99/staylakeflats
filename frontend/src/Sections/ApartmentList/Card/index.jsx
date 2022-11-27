import React from "react";

import { Wrapper, Header } from "./styled";

function Card({ apartmentData }) {
  return (
    <Wrapper>
      <Header>Título</Header>
      <div></div>
      <footer>
        <strong>StayLakeFlats</strong>
      </footer>
    </Wrapper>
  );
}

export default Card;
