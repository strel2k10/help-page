import React from "react";
import classes from "./Contact.module.scss";

const Contact = (props) => {
  return (
    <div className={classes["divContact"]}>
      <a className={classes["clickableText"]} href="reddit.com">
        <span>Tem dúvidas?</span> <span>Entre em contacto</span>
      </a>

      <span className={classes["contactTextContent"]}>
        A nossa equipa de suporte estará disponível para o ajudar.
      </span>
    </div>
  );
};

export default Contact;
