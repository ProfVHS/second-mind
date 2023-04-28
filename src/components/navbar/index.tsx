import React from "react";

import secondmindLogo from "../../assets/mind.svg";
import { HomeIcon, CategoriesIcon, CalendarIcon, SettingsIcon } from "./Icons";
import { subPage } from "../../shared/type";

interface NavbarProps {
  subpage: subPage;
}

function Navbar({ subpage }: NavbarProps) {
  return (
    <div className="navbar">
      <img src={secondmindLogo} />
      <HomeIcon isSelected={subpage === "HOME"} />
      <CategoriesIcon isSelected={subpage === "CATEGORIES"} />
      <CalendarIcon isSelected={subpage === "CALENDAR"} />
      <SettingsIcon isSelected={subpage === "SETTINGS"} />
    </div>
  );
}

export default Navbar;
