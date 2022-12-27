import React from "react";
import { Footer } from "./Component/Footer";
import { NavBar } from "./Component/Header";
import { BottomScreen } from "./Pages/BottomScreen";
import { MiddleScreen } from "./Pages/MiddleScreen";
import TopScreen from "./Pages/TopScreen";
import "./App.css";
export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <TopScreen />
      <MiddleScreen />
      <BottomScreen />
      <Footer />
    </React.Fragment>
  );
};
