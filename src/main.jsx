import React from "react";
import ReactDOM from "react-dom/client";
import { Buttons } from "./components/Buttons";
import GridComponent from "./components/GridComponent";
import GridTemplate from "./components/GridTemplate";
import LayoutComponent from "./components/LayoutComponent";
import LayoutTemplate from "./components/LayoutTemplate";
import { CounterApp } from "./CounterApp";

import { App, FirstsApp } from "./FirstsApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Buttons />
    <GridComponent /> 
    <GridTemplate />
    <LayoutTemplate />*/}
    <LayoutComponent />
  </React.StrictMode>
);
