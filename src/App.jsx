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

function App() {
  return (
    <>
      <CollapsibleExample></CollapsibleExample>
      <Header></Header>
      <AboutUS></AboutUS>
      {/* <Classroom></Classroom> */}
      <ControlledCarousel></ControlledCarousel>
    </>
  );
}

export default App;
