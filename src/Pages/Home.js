import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import ReservationForm from "../Reservation/ReservationForm";
import classes from "../PagesCSS/Home.module.css";

import restaurantSetting from "../Images/Restaurant-setting.jpg";
import pastaDish from "../Images/Pasta-dish.jpg";
import meatballs from "../Images/Meatballs.jpg";
import mozzarella from "../Images/Mozzarella.jpg";

const Home = () => { 
  const ref = useRef();

  return (
    <Parallax pages={3.1} className={classes.container} ref={ref}>
      {/* This is the first page which contains the dining image */}
      <ParallaxLayer
        className={classes.firstImgCont}
        sticky={{ start: 0, end: 1 }}
        factor={0.8}
      >
        <div>
          <img
            src={restaurantSetting}
            className={classes.firstImg}
            alt="An ambient restaurant bar"
          />
        </div>
      </ParallaxLayer> 

      {/* This is the title and opening text */}
      <ParallaxLayer offset={0} speed={0}>
        <div className={classes.firstText}>
          <h1 className={classes.title}>Italia Bedford</h1>
          <div className={classes.desc}>
            <p>
              Italia is an intimate and traditional Italian restaurant located
              on Bedford High Street.
            </p>
            <p>
              We serve up the finest authentic Italian cuisine using only the
              freshest ingredients
            </p>
          </div>
          <button
            className={classes.bookTableButton}
            onClick={() => ref.current.scrollTo(2.95)}
          >
            Book a table
          </button>
        </div>
      </ParallaxLayer>

      {/* This is the second page containing menu info */}
      <ParallaxLayer
        offset={1}
        speed={0.5}
        className={classes.secondCont}
        factor={0.9}
      >
        <p className={classes.galleryImgTitle}>A glance at our food</p>
        <div className={classes.images}>
          <img
            className={classes.galleryImg}
            src={meatballs}
            alt="meatballs and spaghetti"
          />
          <img
            className={classes.galleryImg}
            src={mozzarella}
            alt="mozzarella and tomato slices"
          />
        </div>
      </ParallaxLayer>

      {/* This is the scrolling picture of pasta */}
      <ParallaxLayer offset={1.6} speed={0} className={classes.pastaImg}>
        <img src={pastaDish} alt="plate of pasta" />
      </ParallaxLayer>

      {/* This is the third page containg the contact and reservation info */}
      <ParallaxLayer
        offset={2}
        speed={0.5}
        className={classes.thirdCont}
        factor={1.05}
      >
        <div className={classes.info}>
          <div>
            <p className={classes.miniImg}>&#9993;</p>
            <p className={classes.topLine}>send us an Email</p>
            <p className={classes.bottomLine}><a href="mailto:jake.a.gallagher98@gmail.com" target="_blank">Contact Us</a></p>
          </div>
          <div>
            <p className={classes.miniImg}>&#9906;</p>
            <p className={classes.topLine}>Our Address</p>
            <p className={classes.bottomLine}>
              72 HigStreet, Bedford, MK40 1NN
            </p>
          </div>
          <div>
            <p className={classes.miniImg}>&#9743;</p>
            <p className={classes.topLine}>Call Us</p>
            <p className={classes.bottomLine}>(Phone number here)</p>
          </div>
        </div>
        <ReservationForm className={classes.form} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
