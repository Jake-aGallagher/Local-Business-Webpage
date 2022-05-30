import React, { useState } from "react";
import classes from "./ReservationForm.module.css";

const ReservationForm = () => {
  const [dateType, setDateType] = useState("text");

  const makeReservation = (event) => {
    event.preventDefault();
    alert("Please check the console to see the Form Data in JSON format ready for dispatch to a backend.")
    console.log(
      "{\n",
      "{ Boodking Date:" , event.target.bookingDate.value , "}\n",
      "{ Time:" , event.target.time.value , "}\n",
      "{ Party size:" , event.target.persons.value , "}\n",
      "{ Name:" , event.target.name.value , "}\n",
      "{ Email:" , event.target.email.value , "}\n",
      "{ Contact Number:" , event.target.contactNumber.value , "}\n",
      "}"
      )
  }

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>Book A Table</h3>
      <form className={classes.formInputs} onSubmit={makeReservation}>
        <input
        id="bookingDate"
          type={dateType}
          onFocus={() => setDateType("date")}
          onBlur={() => setDateType("text")}
          placeholder="Booking Date"
        />
        <input id="time" type="time" placeholder="Time" />
        <input id="persons" type="number" placeholder="Persons" />
        <input id="name" type="text" placeholder="Name" />
        <input id="email" type="email" placeholder="Email" />
        <input id="contactNumber" type="tel" placeholder="Contact Number" />
        <input type="submit" className={classes.reserve} value="Reserve Table" />
      </form>
    </div>
  );
};

export default ReservationForm;
