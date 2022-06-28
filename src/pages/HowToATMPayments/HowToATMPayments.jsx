import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToATMPayments.module.scss";

// Components

function HowToATMPayments() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Pagamentos por Multibanco</h2>
      <p className={classes["caresItemText"]}>
        Surgiram relatos de tentativas de burla alegando que o CustoJusto tem um
        serviço de cobrança de valores em nome do anunciante. É importante
        referir o seguinte:
      </p>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            O CustoJusto não é intermediário nem faculta qualquer serviço de
            intermediação entre comprador e vendedor.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            O CustoJusto não cobra qualquer valor a compradores em nome dos
            anunciantes.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Nunca pague a <b>anunciantes</b> através de Referências Multibanco,
            já que são mais difíceis de identificar.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Caso seja confrontado com alguma situação idêntica, sugerimos que
            nos{" "}
            <a href="https://www.custojusto.pt/ajuda-contacto?section=7">
              contacte de imediato
            </a>{" "}
            e nos forneça a informação.
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToATMPayments;
