import React from "react";
import HomeIcon from "./navbarIcons/HomeIcon";
import SettingsIcon from "./navbarIcons/SettingsIcon";
import CategoriesIcon from "./navbarIcons/CategoriesIcon";

import secondmindLogo from "../assets/mind.svg";
import CalendarIcon from "./navbarIcons/CalendarIcon";

interface NavbarProps {
  sub: subPage;
}

function Navbar({ sub }: NavbarProps) {
  return (
    <div className="navbar">
      <img src={secondmindLogo} />
      <HomeIcon isSelected={sub === "HOME"} />
      <CategoriesIcon isSelected={sub === "CATEGORIES"} />
      <CalendarIcon isSelected={sub === "CALENDAR"} />
      <SettingsIcon isSelected={sub === "SETTINGS"} />
    </div>
  );
}

export default Navbar;
