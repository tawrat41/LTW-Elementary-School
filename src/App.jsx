/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CollapsibleExample from "./Component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import AboutUS from "./Component/AboutUS/AboutUS";
import Classroom from "./Component/Classroom/Classroom";
import ControlledCarousel from "./Component/Classroom/Classroom";
import Teachers from "./Component/Teachers/Teachers";
import Parents from "./Component/Parents/Parents";
import Admission from "./Component/Admission/Admission";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <CollapsibleExample></CollapsibleExample>
      <Header></Header>
      <AboutUS></AboutUS>
      <ControlledCarousel></ControlledCarousel>
      <Teachers></Teachers>
      <Parents></Parents>
      <Admission></Admission>
      <Footer></Footer>
    </>
  );
}

export default App;
