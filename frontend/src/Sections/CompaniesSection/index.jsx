import React from "react";

import { Wrapper, ItemDiv } from "./styled";

import airbnb from "../../assets/icons/airbnb.png";
import booking from "../../assets/icons/booking.png";

function CompaniesSection() {
  const links = [
    {
      icon: booking,
      iconSize: "200px",
    },
    {
      icon: airbnb,
      iconSize: "80px",
    },
  ];

  return (
    <Wrapper>
      {links.map((item) => (
        <ItemDiv color={item.color} iconSize={item.iconSize}>
          <img src={item.icon} />
        </ItemDiv>
      ))}
    </Wrapper>
  );
}

export default CompaniesSection;
