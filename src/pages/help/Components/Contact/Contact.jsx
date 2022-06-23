import React from 'react';  
import classes from "./Contact.module.scss";


const Contact = props => {
    return (
      <div className={classes["divContact"]}>
        <a className={classes["clickableText"]} href="">Tem dúvidas? <br/>Entre em contacto </a>

        <p className={classes["contactTextContent"]}>A nossa equipa de suporte <br/>estará disponível para o ajudar.</p>
      </div>
    );
  };
  
  export default Contact;
