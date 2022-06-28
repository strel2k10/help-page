import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./questionBox.module.scss";

const QuestionBox = (props) => {
  return (
    <Fragment>
        <Accordion.Item className={classes["accordionItem"]} eventKey={props.eventKey}>
          <Accordion.Header className={classes["accordionHeader"]}>
            {props.questionTitle}
          </Accordion.Header>
          <Accordion.Body className={classes["accordionBody"]}>
            {props.children}
          </Accordion.Body>
          
        </Accordion.Item>
    </Fragment>
  );
};

export default QuestionBox;
