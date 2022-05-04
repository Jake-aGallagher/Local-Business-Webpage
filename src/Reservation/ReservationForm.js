import React, { useState } from "react";
import classes from "./ReservationForm.module.css";

const ReservationForm = () => {
  const [dateType, setDateType] = useState("text");

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>Book A Table</h3>
      <form className={classes.formInputs}>
        <input
          type={dateType}
          onFocus={() => setDateType("date")}
          onBlur={() => setDateType("text")}
          placeholder="Booking Date"
        />
        <input type="time" placeholder="Time" />
        <input type="number" placeholder="Persons" />
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Contact Number" />
        <button className={classes.reserve}>Reserve Table</button>
      </form>
    </div>
  );
};

export default ReservationForm;
