import React, { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import classes from "../PagesCSS/Menu.module.css";

const Menu = () => {
  const [menuSelection, setMenuSelection] = useState("Standard");
  const [sectionSelection, setSectionSelection] = useState("Antipasti");

  /* Selectors for Menu choices and setting the sub-Menu choices to the defaul for that Menu */
  const mMenuHandler = () => {
    setMenuSelection("Standard");
    setSectionSelection("Antipasti");
  };

  const lmenuHandler = () => {
    setMenuSelection("Lunch");
    setSectionSelection("Lunch");
  };

  const dMenuHandler = () => {
    setMenuSelection("Drinks");
    setSectionSelection("Wine");
  };

  /* Setting the sub-Menu selection (can use simple string because it hands this data to the 'MenuItems component to call the data) */
  const selectionHandler = (props) => {
    setSectionSelection(props);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Menu</h1>
      <div className={classes.primarySelectButtons}>
        <button className={classes.buttons} onClick={mMenuHandler}>
          Main Menu
        </button>
        <button className={classes.buttons} onClick={lmenuHandler}>
          Lunch Menu
        </button>
        <button className={classes.buttons} onClick={dMenuHandler}>
          Drinks Menu
        </button>
      </div>
      <div className={classes.secondarySelectButtons}>
        {menuSelection === "Standard" ? (
          /* Conditionally showing the sub-Menus for the Main menu */
          <div>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Antipasti")}
            >
              Antipasti
            </button>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Secondi")}
            >
              Secondi
            </button>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Sides")}
            >
              Sides
            </button>
          </div>
        ) : menuSelection === "Lunch" ? (
          /* Conditionally showing the sub-Menus for the Lunch menu */
          <div>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Lunch")}
            >
              Lunch
            </button>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Paninis")}
            >
              Paninis
            </button>
          </div>
        ) : (
          /* Conditionally showing the sub-Menus for the Drinks menu */
          <div>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Wine")}
            >
              Wine
            </button>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Beer")}
            >
              Beer
            </button>
            <button
              className={classes.buttons}
              onClick={() => selectionHandler("Soft")}
            >
              Soft
            </button>
          </div>
        )}
      </div>
      {/* Giving the Menu selection data to the child to retrieve from database */}
      <MenuItems
        menuSelection={menuSelection}
        sectionSelection={sectionSelection}
      />
    </div>
  );
};

export default Menu;
