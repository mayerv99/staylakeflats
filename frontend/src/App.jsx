import React from "react";

import { GlobalStyle } from "./GlobalStyle";

import MainSection from "./Sections/MainSection";
import ApartmentList from "./Sections/ApartmentList";
import ListSection from "./Sections/ListSection";
import FormSection from "./Sections/FormSection";
import CompaniesSection from "./Sections/CompaniesSection";

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainSection />
      <CompaniesSection />
      <ListSection />
      <ApartmentList />
      <FormSection />
    </div>
  );
}

export default App;
