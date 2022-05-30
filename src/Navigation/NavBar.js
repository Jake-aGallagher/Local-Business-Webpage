import React, { useState } from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showMenus, setShowMenus] = useState(false);

  const showServHandler = () => {
    setShowServices(!showServices);
  };

  const menusHandler = () => {
    setShowMenus(!showMenus);
  };

  return (
    <div className={classes.navBar}>
      <h1 className={classes.logo}>Italia</h1>

      {/* Menu Bar */}
      <div >
        <p onClick={showServHandler} className={classes.menu}>
          &#9776; {showServices ? "Close" : "Menu"}
        </p>

        {/* First Dropdown Bar */}
        {showServices && (
          <ul className={classes.dropdown}>
            <li className={classes.li}>Home</li>
            <li className={classes.li}>
              <div onClick={menusHandler} className={classes.menuDiv}>
                <p>Menu</p>
                <p className={classes.menuPlus}>{showMenus ? "-" : "+"}</p>
              </div>
            </li>

            {/* Second Dropdown Bar */}
            {showMenus && (
              <ul className={classes.menuSegment}>
                <li className={classes.li}>Standard Menu</li>
                <li className={classes.li}>Lunch Menu</li>
                <li className={classes.li}>Drinks Menu</li>
              </ul>
            )}

            <li className={classes.li}>Gallery</li>
            <li className={classes.li}>Reservation</li>
            <li className={classes.li}>Contact Us</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
