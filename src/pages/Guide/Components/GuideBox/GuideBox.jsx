import React from "react";
import classes from "./guideBox.module.scss";

// ADD REDIRECT HERE
const test = (src) => {
  console.log("Click :)" ,src);
};

const GuideBox = (props) => {
  return (
    <div className={classes["guideBoxDiv"]} onClick={() => test(props.src)}>
      <h2 className={classes["guideBoxTitle"]}> {props.guideBoxTitle}</h2>
    </div>
  );
};

export default GuideBox;
