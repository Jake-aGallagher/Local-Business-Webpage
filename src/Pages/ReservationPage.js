import React from "react";
import ReservationForm from "../Reservation/ReservationForm";
import classes from "../PagesCSS/ReservationPage.module.css";

const ReservationPage = () => {
  return (
    <div>
      <h2 className={classes.header}>MAKE A RESERVATION</h2>
      <div className={classes.positioning}>
        <ReservationForm />
      </div>
    </div>
  );
};

export default ReservationPage;
