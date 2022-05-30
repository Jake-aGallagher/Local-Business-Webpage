import React, { useState } from "react";
import Maps from "../Maps/Maps";
import classes from "../PagesCSS/ContactUs.module.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [conNum, setConNum] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const conNumHandler = (event) => {
    setConNum(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || conNum === "" || message === "") {
      alert("please fill in all form fields");
    } else {
      alert("check console log for form details");
      console.log(
        "{\n",
        "{ Name:", name, "}\n",
        "{ Email:", email, "}\n",
        "{ Contact Number:" , conNum, "}\n",
        "{ Message:" ,message, "}\n",
        "}"
        );
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>CONTACT US</h1>
      <div className={classes.call}>
        <p>&#9743; CALL US</p>
        <p>01234 910 147</p>
      </div>
      <div className={classes.find}>
        <p>&#9906; OUR ADRESS</p>
        <p>72 High Street, Bedford, MK40 1NN</p>
      </div>
      <div className={classes.formTitle}>
        <p>Have a question?</p>
        <p>Get in contact with us</p>
      </div>
      <form onSubmit={submitHandler} className={classes.contactForm}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className={classes.formElements}
          onChange={nameHandler}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={classes.formElements}
          onChange={emailHandler}
        />
        <input
          id="contactNumber"
          type="tel"
          placeholder="Contact Number"
          className={classes.formElements}
          onChange={conNumHandler}
        />
        <textarea
          id="message"
          rows="4"
          cols="50"
          placeholder="Your Message"
          className={classes.formElements}
          onChange={messageHandler}
        />
        <input type="submit" value="Submit" className={classes.formSubmit} />
      </form>
      <div className={classes.map}>
        <Maps />
      </div>
    </div>
  );
};

export default ContactUs;
