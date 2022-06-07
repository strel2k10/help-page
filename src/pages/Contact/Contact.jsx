import React, { Fragment } from "react";

// Styles
import classes from "./contact.module.scss";

// Components

function Contact() {
  return (
    <Fragment>
      <div className={classes["wrapper"]}>
        <h2 className={classes["contactTitle"]}>Como podemos ajudar?</h2>
        <p className={classes["contactText"]}>
          Veja as respostas para as questões mais comuns sobre:{" "}
          <a href="www.google.pt">Colocar anúncios</a>,{" "}
          <a href="wwww.google.pt">Gerir anúncios</a>,{" "}
          <a href="www.google.pt">Consultar anúncios</a>,{" "}
          <a href="www.google.pt">Favoritos</a>,{" "}
          <a href="www.google.pt">Revisão / anúncios rejeitados</a>.
        </p>
        <p className={classes["contactText"]}>
          Se, mesmo assim, não encontrar resposta à sua pergunta, então poderá
          contactar-nos pelo formulário, para isso basta escolher o seu assunto
          nas opções em baixo. Procuramos responder às questões que nos são
          colocadas no mais curto espaço de tempo possível.
        </p>

        <h2 className={classes["contactTitle"]}>
          {" "}
          Seleccione o assunto do seu contacto
        </h2>

        <ul className={classes["contactList"]}>
          <li>
            {" "}
            <a href="www.google.pt">Problemas com anúncios</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Contact;
