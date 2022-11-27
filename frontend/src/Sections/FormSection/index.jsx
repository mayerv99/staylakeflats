import React from "react";
import { Wrapper, Form, IconsList, IconCard } from "./styled";

import instagram from "../../assets/icons/instagram.png";
import whatsapp from "../../assets/icons/whatsapp.png";

function FormSection() {
  const icons = [
    {
      icon: instagram,
      onClick: () => {
        window.open("https://www.instagram.com/staylake_flats/");
      },
      background: "linear-gradient(45deg, #ffd854, #fa5148, #ca38a7)",
      buttonText: "Acessar",
      text: "@staylake_flats",
    },
    {
      icon: whatsapp,
      onClick: () => {
        window.open("https://wa.me/5561998017242");
      },
      background: "linear-gradient(45deg,#25D366,#128C7E)",
      buttonText: "Enviar mensagem",
      text: "+55 (61) 99801-7242",
    },
  ];

  return (
    <Wrapper>
      <Form>
        <header>Entre em contato conosco</header>
        <IconsList back>
          {icons.map((icon) => (
            <IconCard background={icon.background}>
              <img src={icon.icon} />

              <div>
                {icon.text}
                <button onClick={icon.onClick}>{icon.buttonText}</button>
              </div>
            </IconCard>
          ))}
        </IconsList>
      </Form>
    </Wrapper>
  );
}

export default FormSection;
