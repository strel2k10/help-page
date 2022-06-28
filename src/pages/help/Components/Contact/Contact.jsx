import React from "react";
import { Link } from "react-router-dom";
import classes from "./Contact.module.scss";

const Contact = (props) => {
  return (
    <div className={classes["divContact"]}>
      <Link to="/contact" className={classes["clickableText"]}>
        Tem dúvidas? <br />
        Entre em contacto
      </Link>

      <p className={classes["contactTextContent"]}>
        A nossa equipa de suporte <br />
        estará disponível para o ajudar.
      </p>
    </div>
  );
};

export default Contact;
