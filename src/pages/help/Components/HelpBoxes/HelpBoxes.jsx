import React from "react";

// ASSETS

import questionIcon from "../../../../assets/questionIcon.svg";
import bookIcon from "../../../../assets/bookIcon.svg";
import walletIcon from "../../../../assets/walletIcon.svg"
import contactIcon from "../../../../assets/contactIcon.svg";
import privacyIcon from "../../../../assets/privacyIcon.svg";
import testimoniesIcon from "../../../../assets/testemoniesIcon.svg";

import classes from "./helpBoxes.module.scss";

import HelpBox from "../HelpBox/HelpBox";

const HelpBoxes = (props) => {
  return (
    <div className={classes["helpBoxes"]}>
      <HelpBox src="/FAQ" logoSrc={questionIcon} boxTitle="Perguntas Frequentes" />
      <HelpBox src="/guide" logoSrc={bookIcon} boxTitle="Guias de utilização"/>
      <HelpBox src="/howtosection" logoSrc={walletIcon} boxTitle="Compra Segura"/>
      <HelpBox src="/contact" logoSrc={contactIcon} boxTitle="Contacto"/>
      <HelpBox src="/privacy" logoSrc={privacyIcon} boxTitle="Regras e privacidade"/>
      <HelpBox src="/testimonies" logoSrc={testimoniesIcon} boxTitle="Testemunhos"/>
    </div>
  );
};

export default HelpBoxes;
