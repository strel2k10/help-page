import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToStolenArticles.module.scss";

// Components

function HowToStolenArticles() {
  return (
    <HelpPage>
      <h3 className={classes["caresTitle"]}>Artigos roubados</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Assegure-se que o produto a comprar não foi roubado.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Sugerimos que solicite, sempre que possível, o recibo original do
            produto.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Caso tenha dúvida, deve confirmar a identidade do vendedor.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Caso tenha dúvida, pode ainda confirmar junto da polícia se o
            produto não foi roubado.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Para artigos de marca, confirme se os números de série não foram
            manipulados.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Em veículos, deverá sempre verificar se o número de chassis não foi
            adulterado.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Se suspeitar de um objecto roubado, deverá contactar-nos e as
            autoridades competentes imediatamente.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Ajude-nos a prevenir que criminosos vendam produtos roubados,
            seguindo estas sugestões!
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>Lembre-se</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Quando possível ou aplicável, solicite o recibo original.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Verifique o o número de série/chassis.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Solicite prova de propriedade em compras de grandes produtos como
            carros ou imóveis.
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToStolenArticles;
