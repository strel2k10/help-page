import React from "react";
import classes from "./helpBox.module.scss";

const test = () => {
  console.log("Click :)");
};

const Box = (props) => {
  return (
    <div className={classes["box"]}>
      <img
        className={classes["imageLogo"]}
        src={props.logoSrc}
        alt="Logo should be here"
        onClick={test}
      />
      <h2 className={classes["boxTitle"]}> {props.boxTitle}</h2>
    </div>
  );
};

export default Box;
