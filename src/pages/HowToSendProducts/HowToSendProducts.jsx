import React, { Fragment } from "react";

// Styles
import classes from "./howToSendProducts.module.scss";

// Components

function HowToSendProducts() {
  return (
    <Fragment>
      <div className={classes["wrapper"]}>
        <h2 className={classes["caresTitle"]}>Envio de produtos</h2>
        <p className={classes["caresItemText"]}>
          A maioria das situações de fraude sucede quando o comprador e vendedor
          não se encontram.
        </p>

        <h3 className={classes["caresTitle"]}>Quando compra</h3>

        <ul className={classes["caresList"]}>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Nunca adiante dinheiro, independentemente da confiança que o
              vendedor lhe aparenta.
            </p>
          </li>

          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Os fraudulentos prontificam-se a apresentar documentação (Bilhete
              de Identidade, passaporte, etc) como garantia. Isto não o protege
              da fraude!
            </p>
          </li>

          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              O envio do produto por correio com portes pagos pelo comprador não
              garante que seja livre de risco. Não tem como ver o produto antes
              de o pagar.
            </p>
          </li>
        </ul>

        <h3 className={classes["caresTitle"]}>Quando vende</h3>

        <ul className={classes["caresList"]}>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              É sempre preferível negociar com Pagamento contra entrega.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Não envie o produto sem ter as condições de pagamento devidamente
              acordadas e finalizadas.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Evite pagamentos por cheque. Não é garantido que esse cheque tenha
              cobertura.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Pagamentos internacionais: <br />
              Nunca utilize serviços de pagamento como o Western Union, Money
              Gram ou Bidpay, uma vez que são difíceis de controlar ou cancelar
              o pagamento. Estes serviços são muito populares entre as pessoas
              que praticam fraudes por essas mesmas razões.
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default HowToSendProducts;
