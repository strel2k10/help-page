import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./questionBox.module.scss";

const QuestionBox = (props) => {
  return (
    <Fragment>
      <Accordion className={classes["accordion"]} defaultActiveKey="0">
        <Accordion.Item eventKey={props.eventKey}>
          <Accordion.Header className={classes["accordionHeader"]}>
            {props.questionTitle}
          </Accordion.Header>
          <Accordion.Body className={classes["accordionBody"]}>
            {props.questionBody}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
};

export default QuestionBox;
