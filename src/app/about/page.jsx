// src/app/about/page.jsx
import React from "react";
import Us from "../../components/Us"; // Importamos el componente Us
import Navbar2 from "../../components/Navbar2"; // Importamos el componente Navbar
const AboutPage = () => {
  return (
    <div>
      <Navbar2 />
      <Us />
    </div>
  );
};

export default AboutPage;
