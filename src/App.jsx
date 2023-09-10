/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CollapsibleExample from "./Component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import AboutUS from "./Component/AboutUS/AboutUS";

function App() {
  return (
    <>
      <CollapsibleExample></CollapsibleExample>
      <Header></Header>
      <AboutUS></AboutUS>
    </>
  );
}

export default App;
