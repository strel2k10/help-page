import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToProtectYourself.module.scss";

// Components

function HowToProtectYourself() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Para se Proteger</h2>

      <p className={classes["caresItemText"]}>
        Como regra, nunca clique em links de emails afirmando que provêm de
        bancos ou outras instituições financeiras. Deve sempre navegar
        directamente para o site do banco ou instituição financeira em vez de
        aceder à sua conta bancária a partir de outro site.
      </p>

      <p className={classes["caresItemText"]}>
        Suspeitar de emails (ou link para a página) que pedem para digitar a sua
        senha ou outras informações relevantes da sua conta bancária.
      </p>

      <p className={classes["caresItemText"]}>
        Também há relatos de casos em que os vírus nos computadores são
        utilizados para interceptar e recolher informações sensíveis. Portanto,
        certifique-se de que seu computador tem o mais recente software de
        protecção contra vírus.
      </p>

      <p className={classes["caresItemText"]}>
        O sistema operativo e navegador de Internet do seu computador também
        deve estar actualizado com as mais recentes actualizações de segurança.
      </p>
    </HelpPage>
  );
}

export default HowToProtectYourself;
