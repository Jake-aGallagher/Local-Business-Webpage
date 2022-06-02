import React from "react";
import ReservationForm from "../Reservation/ReservationForm";
import classes from "../PagesCSS/ReservationPage.module.css";

const ReservationPage = () => {
  return (
    <div>
      <h1 className={classes.header}>MAKE A RESERVATION</h1>
      <div className={classes.positioning}>
        <ReservationForm />
      </div>
    </div>
  );
};

export default ReservationPage;
