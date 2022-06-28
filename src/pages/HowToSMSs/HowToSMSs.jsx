import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToSMSs.module.scss";

// Components

function HowToSMSs() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>SMS recebidos</h2>
      <p className={classes["caresItemText"]}>
        A recepção de SMS com ofertas sobre os produtos que tem à venda também
        pode incorrer em riscos. Por vezes, as mesmas pessoas que enviam emails
        com as famosas “cartas nigerianas” também o fazem por SMS, uma vez que
        já sabem que os emails são frequentemente bloqueados.
      </p>

      <p className={classes["caresItemText"]}>
        Por outro lado, tenha especial cuidado com SMS de números estranhos ou
        provenientes do exterior.
      </p>

      <p className={classes["caresItemText"]}>
        Há situações em que, respondendo ao SMS, incorreram em custos elevados
        por responder a um “serviço de valor acrescentado”.
      </p>

      <h3 className={classes["caresTitle"]}>Lembre-se</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Não responda a SMS com números estranhos
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Cuidado com SMS de pessoas no estrangeiro
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToSMSs;
