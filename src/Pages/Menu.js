import React, { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import classes from "../PagesCSS/Menu.module.css";

const Menu = () => {
  const [menuSelection, setMenuSelection] = useState("Standard");
  const [sectionSelection, setSectionSelection] = useState("Antipasti");

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

  const selectionHandler = (props) => {
    setSectionSelection(props);
  };

  console.log(sectionSelection);

  return (
    <div className={classes.page}>
      <h2 className={classes.title}>Menu</h2>
      <div className={classes.primarySelectButtons}>
        <button className={classes.buttons} onClick={mMenuHandler}>Main Menu</button>
        <button className={classes.buttons} onClick={lmenuHandler}>Lunch Menu</button>
        <button className={classes.buttons} onClick={dMenuHandler}>Drinks Menu</button>
      </div>
      <div className={classes.secondarySelectButtons}>
        {menuSelection === "Standard" ? (
        <div>
          <button className={classes.buttons} onClick={() => selectionHandler("Antipasti")}>
            Antipasti
          </button>
          <button className={classes.buttons} onClick={() => selectionHandler("Secondi")}>Secondi</button>
          <button className={classes.buttons} onClick={() => selectionHandler("Sides")}>Sides</button>
        </div>
      ) : menuSelection === "Lunch" ? (
        <div>
          <button className={classes.buttons} onClick={() => selectionHandler("Lunch")}>Lunch</button>
          <button className={classes.buttons} onClick={() => selectionHandler("Paninis")}>Paninis</button>
        </div>
      ) : (
        <div>
          <button className={classes.buttons} onClick={() => selectionHandler("Wine")}>Wine</button>
          <button className={classes.buttons} onClick={() => selectionHandler("Beer")}>Beer</button>
          <button className={classes.buttons} onClick={() => selectionHandler("Soft")}>Soft</button>
        </div>
      )}
      </div>
      <MenuItems
        menuSelection={menuSelection}
        sectionSelection={sectionSelection}
      />
    </div>
  );
};

export default Menu;
