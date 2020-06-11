import React, { useState } from "react";

import { Dropdown } from "./dropdown.component";
import { Fade } from "./fade.component";

export const Nav = () => { 
  const [showingDropdown, setShowingDropdown] = useState(false);

  function toggleDropdown() {
    if (showingDropdown) setShowingDropdown(false);
    else setShowingDropdown(true);
  }

  let iconContainerClasses = "c-nav__icon-container";
  if (showingDropdown) iconContainerClasses += " is-active";

  return (
    <div className="c-nav__container" onClick={toggleDropdown}>
      <div className={iconContainerClasses}>
        <div className="c-nav__top-line"></div>
        <div className="c-nav__center-line"></div>
        <div className="c-nav__bottom-line"></div>
      </div>
      <Fade show={showingDropdown}>
        <Dropdown />
      </Fade>
    </div>
  )
 };