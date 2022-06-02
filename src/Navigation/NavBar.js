import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showMenus, setShowMenus] = useState(false);

  /* Grabbing the size of the screen to set computer or mobile menu layout */
  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  }, []);

  /* const for conditionally rendering either version of nav bar */
  const showBurger = windowSize <= 700;

  /* Closing the nav bar (when menu is clicked whilst open or a page has been clicked) */
  const showMenuHandler = () => {
    setShowMenus(!showMenus);
  };

  /* react-Router way of showing when a link is active */
  const navActiveStyler = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
    };
  };

  return (
    <div className={classes.navBar}>
      <h1 className={classes.logo}>Italia</h1>

      {/* conditionally showing the Hamburger Menu button if screen width is small*/}
      {showBurger && (
        <button onClick={showMenuHandler} className={classes.showMenuButton}>
          &#9776; Menu
        </button>
      )}

      {/* Conitionally showing the Hamburger Menu/Navbar if screen width is small and menu button has been clicked */}
      {showBurger && showMenus && (
        <div>
          <ul className={classes.dropdown}>
            <li>
              <NavLink
                to="Local-Business-Webpage/"
                className={classes.li}
                style={navActiveStyler}
                onClick={showMenuHandler}
              >
                Home
              </NavLink> 
            </li>
            <li>
              <NavLink
                to="Local-Business-Webpage/Menu"
                className={classes.li}
                style={navActiveStyler}
                onClick={showMenuHandler}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Local-Business-Webpage/Gallery"
                className={classes.li}
                style={navActiveStyler}
                onClick={showMenuHandler}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Local-Business-Webpage/Reservation"
                className={classes.li}
                style={navActiveStyler}
                onClick={showMenuHandler}
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Local-Business-Webpage/ContactUs"
                className={classes.li}
                style={navActiveStyler}
                onClick={showMenuHandler}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Conditionally showing the standard Navbar layout */}
      {!showBurger && (
        <ul className={classes.menuSelections}>
          <li>
            <NavLink to="Local-Business-Webpage/" className={classes.links} style={navActiveStyler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Local-Business-Webpage/Menu"
              className={classes.links}
              style={navActiveStyler}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Local-Business-Webpage/Gallery"
              className={classes.links}
              style={navActiveStyler}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Local-Business-Webpage/Reservation"
              className={classes.links}
              style={navActiveStyler}
            >
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Local-Business-Webpage/ContactUs"
              className={classes.links}
              style={navActiveStyler}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
