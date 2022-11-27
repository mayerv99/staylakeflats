import React from "react";

import { Wrapper, Background, List, ListItem } from "./styled";

import home from "../../assets/imgs/home.png";
import sunbathing from "../../assets/imgs/sunbathing.png";
// import laugh from "../../assets/imgs/laugh.png";

function MainSection() {
  const itemsList = [
    {
      name: "Conforto",
      image: home,
    },
    {
      name: "Lazer",
      image: sunbathing,
    },
    {
      name: "Diversão",
      image: sunbathing,
    },
  ];

  return (
    <Wrapper>
      <Background>
        <h1>StayLakeFlats</h1>
        <List>
          {itemsList.map((item) => (
            <ListItem>
              <img src={item.image} />
              <div>{item.name}</div>
            </ListItem>
          ))}
        </List>
      </Background>
    </Wrapper>
  );
}

export default MainSection;
