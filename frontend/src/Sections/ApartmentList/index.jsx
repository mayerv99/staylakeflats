import React from "react";
import Card from "./Card";
import { Wrapper, List } from "./styled";

function ApartmentList() {
  const apartmentsList = [1, 2, 3, 4];
  return (
    <Wrapper>
      <header>Conheça nossas unidades</header>
      <List>
        {apartmentsList.map((apartment) => (
          <Card />
        ))}
      </List>
    </Wrapper>
  );
}

export default ApartmentList;
