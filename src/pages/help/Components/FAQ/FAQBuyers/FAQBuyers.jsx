import React from "react";
import classes from "./FAQBuyers.module.css";

const FAQBuyers = (props) => {
  return (
    <div className={classes["divFAQBuyers"]}>
      <h1 className={classes["titleTextContent"]}> Perguntas de Compradores</h1>
      <a className={classes["clickableText"]} href="google.pt">
        Como guardo uma pesquisa nos Favoritos?
      </a>
      <br />
      <a className={classes["clickableText"]} href="youtube.com">
        Como responder a um anúncio?
      </a>
      <br />
      <a className={classes["clickableText"]} href="sapo.pt">
        Onde encontro o identificador do anúncio?
      </a>
      <br />
    </div>
  );
};

export default FAQBuyers;
