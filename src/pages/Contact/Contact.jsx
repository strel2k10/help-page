import React from "react";
import { Link } from "react-router-dom";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./contact.module.scss";

// Components

function Contact() {
  return (
    <HelpPage>
      <h2 className={classes["contactTitle"]}>Como podemos ajudar?</h2>
      <p className={classes["contactText"]}>
        Veja as respostas para as questões mais comuns sobre:{" "}
        <Link to="/help#a">Colocar anúncios</Link>,{" "}
        <Link to="/help#b">Gerir anúncios</Link>,{" "}
        <Link to="/help#c">Consultar anúncios</Link>,{" "}
        <Link to="/help#d">Favoritos</Link>,{" "}
        <Link to="/help#e">Revisão / anúncios rejeitados</Link>.
      </p>
      <p className={classes["contactText"]}>
        Se, mesmo assim, não encontrar resposta à sua pergunta, então poderá
        contactar-nos pelo formulário, para isso basta escolher o seu assunto
        nas opções em baixo. Procuramos responder às questões que nos são
        colocadas no mais curto espaço de tempo possível.
      </p>
      <h2 className={classes["contactTitle"]}>
        Seleccione o assunto do seu contacto
      </h2>
      <ul className={classes["contactList"]}>
        <li>
          <a href="www.google.pt">Problemas com anúncios</a>
        </li>
        <li>
          <a href="www.google.pt">Problemas com os serviços</a>
        </li>
        <li>
          <a href="www.google.pt">Contactos a anúncios</a>
        </li>
        <li>
          <a href="www.google.pt">Problemas técnicos</a>
        </li>
        <li>
          <a href="www.google.pt">Sugestões</a>
        </li>
        <li>
          <a href="www.google.pt">Outros</a>
        </li>
        <li>
          <a href="www.google.pt">Imprensa e Publicidade</a>
        </li>
        <li>
          <a href="www.google.pt">Versão mobile</a>
        </li>
        <li>
          <a href="www.google.pt">Dificuldade de acesso aos telefones</a>
        </li>
        <li>
          <a href="www.google.pt">Problemas com a conta de utilizador</a>
        </li>
      </ul>
    </HelpPage>
  );
}

export default Contact;
