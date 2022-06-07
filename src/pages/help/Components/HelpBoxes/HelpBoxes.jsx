import React from "react";

// ASSETS

import questionIcon from "../../../../assets/questionIcon.svg";
import bookIcon from "../../../../assets/bookIcon.svg";
import walletIcon from "../../../../assets/walletIcon.svg"
import contactIcon from "../../../../assets/contactIcon.svg";
import privacyIcon from "../../../../assets/privacyIcon.svg";
import testemoniesIcon from "../../../../assets/testemoniesIcon.svg";

import classes from "./helpBoxes.module.scss";

import HelpBox from "../HelpBox/HelpBox";

const HelpBoxes = (props) => {
  return (
    <div className={classes["helpBoxes"]}>
      <HelpBox logoSrc={questionIcon} boxTitle="Perguntas Frequentes" />
      <HelpBox logoSrc={bookIcon} boxTitle="Guias de utilização"/>
      <HelpBox logoSrc={walletIcon} boxTitle="Compra Segura"/>
      <HelpBox logoSrc={contactIcon} boxTitle="Contacto"/>
      <HelpBox logoSrc={privacyIcon} boxTitle="Regras e privacidade"/>
      <HelpBox logoSrc={testemoniesIcon} boxTitle="Testemunhos"/>
    </div>
  );
};

export default HelpBoxes;
