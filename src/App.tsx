import React from "react";
import { useState } from "react";
import secondmindLogo from "./assets/mind.svg";
import "./css/App.css";
import HomeIcon from "./assets/HomeIcon";
import SettingsIcon from "./assets/SettingsIcon";
import FilterButtons from "./component/FilterButtons";

function App() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <img src={secondmindLogo} />
        <HomeIcon />
        <SettingsIcon />
      </div>
      <div className="leftContent">
        <span className="leftContent_title">Today's tasks</span>
        <FilterButtons />
      </div>
    </div>
  );
}

export default App;
