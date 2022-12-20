import React from "react";
import classes from "./MainHeader.module.css";
import CartButton from "./CartButton";
import mealsImg from "../../assets/meals.jpg";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <header className={classes["main-header"]}>
        ReactMeals
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table with food" />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
