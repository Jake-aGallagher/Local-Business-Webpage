import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.top}>
        OPENING HOURS: MON-FRI 11:30 - 15:00 & 18:00 - 22:00
      </p>
      <p className={classes.bottom}>WEEKENDS: SAT-SUN 11:30 - 22:00</p>
    </div>
  );
};

export default Footer;
