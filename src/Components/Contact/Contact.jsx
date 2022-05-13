import React from 'react';  
import classes from "./Contact.module.css";


const Contact = props => {
    return (
      <div className={classes["divContact"]}>
        <a className={classes["clickableText"]} href="reddit.com">Tem dúvidas? <br/>Entre em contacto </a>

        <p className={classes["contactTextContent"]}>A nossa equipa de suporte <br/>estará disponível para o ajudar.</p>
      </div>
    );
  };
  
  export default Contact;