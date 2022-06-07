import React from "react";

// ASSETS

import questionIcon from "../../assets/questionIcon.svg";
import bookIcon from "../../assets/bookIcon.svg";
import walletIcon from "../../assets/walletIcon.svg"
import contactIcon from "../../assets/contactIcon.svg";
import privacyIcon from "../../assets/privacyIcon.svg";
import testemoniesIcon from "../../assets/testemoniesIcon.svg";

import classes from "./Boxes.module.scss";

import Box from "../Box/Box";

const Boxes = (props) => {
  return (
    <div className={classes["boxes"]}>
      <Box logoSrc={questionIcon} boxTitle="Perguntas Frequentes" />
      <Box logoSrc={bookIcon} boxTitle="Guias de utilização"/>
      <Box logoSrc={walletIcon} boxTitle="Compra Segura"/>
      <Box logoSrc={contactIcon} boxTitle="Contacto"/>
      <Box logoSrc={privacyIcon} boxTitle="Regras e privacidade"/>
      <Box logoSrc={testemoniesIcon} boxTitle="Testemunhos"/>
    </div>
  );
};

export default Boxes;
