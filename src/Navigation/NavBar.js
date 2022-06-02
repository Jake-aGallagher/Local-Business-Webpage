import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showMenus, setShowMenus] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  },[]);

  const showBurger = windowSize <= 700;

  const showMenuHandler = () => {
    setShowMenus(!showMenus);
  };


  const navActiveStyler = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : ""
    }
  }

  return (
    <div className={classes.navBar}>
      <h1 className={classes.logo}>Italia</h1>

      {showBurger && (
        <button onClick={showMenuHandler} className={classes.showMenuButton}>
          &#9776; Menu
        </button>
      )}

      {showBurger && showMenus && (
        <div>
          <ul className={classes.dropdown}>
            <li>
              <NavLink to="/" className={classes.li} style={navActiveStyler} onClick={showMenuHandler}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu" className={classes.li} style={navActiveStyler} onClick={showMenuHandler}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" className={classes.li} style={navActiveStyler} onClick={showMenuHandler}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reservation" className={classes.li} style={navActiveStyler} onClick={showMenuHandler}>
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs" className={classes.li} style={navActiveStyler} onClick={showMenuHandler}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {!showBurger && (
        <ul className={classes.menuSelections}>
          <li>
            <NavLink to="/" className={classes.links} style={navActiveStyler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Menu" className={classes.links} style={navActiveStyler}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" className={classes.links} style={navActiveStyler}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reservation" className={classes.links} style={navActiveStyler}>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className={classes.links} style={navActiveStyler}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
