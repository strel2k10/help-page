import React from "react";
import { Link } from "react-router-dom";
import classes from "./helpBox.module.scss";

const test = () => {
  console.log("Click :)");
};

const Box = (props) => {
  return (
    <Link to={props.src} style={{ textDecoration: "none" }}>
      <div className={classes["box"]}>
        <img
          className={classes["imageLogo"]}
          src={props.logoSrc}
          alt="Logo should be here"
          onClick={test}
        />
        <h2 className={classes["boxTitle"]}> {props.boxTitle}</h2>
      </div>
    </Link>
  );
};

export default Box;
