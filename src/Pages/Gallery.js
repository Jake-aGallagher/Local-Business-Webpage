import React from "react";
import classes from "../PagesCSS/Gallery.module.css"

import meatballs from "../Images/Meatballs.jpg";
import tables from "../Images/Tables.jpg";
import meatWithPotatoes from "../Images/MeatWithPotatoes.jpg";
import pasta from "../Images/Pasta.jpg";
import mozzarella from "../Images/Mozzarella.jpg";

const Gallery = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Discover our Gallery</h1>
      <img className={classes.img} src={tables} alt="Well presented tables in a romantically lit, cozy setting." />
      <img className={classes.img} src={meatballs} alt="Delicious meatballs on a bed of plain spaghetti." />
      <img className={classes.img} src={pasta} alt="Fantastic pasta topped with herbs and sliced olives." />
      <img className={classes.img} src={meatWithPotatoes} alt="Filling slices of meat with roast potatoes and side salad." />
      <img className={classes.img} src={mozzarella} alt="Slices of gooey Mozzarella with tangy tomatoes." />
    </div>
  );
};

export default Gallery;
