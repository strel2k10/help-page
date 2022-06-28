import React from "react";
import { Link } from "react-router-dom";
import classes from "./FAQSellers.module.css";

const FAQSellers = (props) => {
  return (
    <div className={classes["divFAQSellers"]}>
      <h1 className={classes["titleTextContent"]}> Perguntas de Vendedores</h1>
      <Link className={classes["clickableText"]} to="/FAQ/10">
        Não recebi nenhum email! O que fazer?
      </Link>
      <br />
      <Link className={classes["clickableText"]} to="/FAQ">
        Como posso alterar o meu anúncio?
      </Link>
      <br />
      <Link className={classes["clickableText"]} to="/FAQ/">
        Como posso colocar o meu anúncio no topo da lista?
      </Link>
      <br />
    </div>
  );
};

export default FAQSellers;
