import React from "react";
import { Link } from "react-router-dom";
import classes from "./FAQBuyers.module.css";

const FAQBuyers = (props) => {
  return (
    <div className={classes["divFAQBuyers"]}>
      <h1 className={classes["titleTextContent"]}> Perguntas de Compradores</h1>
      <Link className={classes["clickableText"]} to="/FAQ">
        Como guardo uma pesquisa nos Favoritos?
      </Link>
      <br />
      <Link className={classes["clickableText"]} to="/FAQ">
        Como responder a um anúncio?
      </Link>
      <br />
      <Link className={classes["clickableText"]} to="/FAQ">
        Onde encontro o identificador do anúncio?
      </Link>
      <br />
    </div>
  );
};

export default FAQBuyers;
