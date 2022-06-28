import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToSendAbroad.module.scss";

// Components

function HowToSendAbroad() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Envio para o exterior</h2>
      <p className={classes["caresItemText"]}>
        Cuidado com as chamadas "cartas nigerianas" e outras tentativas feitas
        por indivíduos em países estrangeiros para enviar os artigos para fora
        de Portugal. Se um comprador quer ter os bens enviados para o
        estrangeiro, recomendamos que você ignore o pedido. O objectivo das
        cartas nigerianas e similares é simplesmente cometer fraudes.
      </p>

      <h3 className={classes["caresTitle"]}>
        Como saber que recebi uma carta nigeriana?
      </h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            As mensagens são escritas muitas vezes num português muito fraco
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            As mensagens usam expressões como "mercadoria" ou "produto" sem
            especificar o produto anunciado. Isto acontece porque eles usam
            frequentemente uma mensagem-tipo.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            As mensagens são geralmente enviados a partir de endereços de email
            gratuitos, como o Yahoo, Gmail e Hotmail.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            As mensagens procuram "seduzí-lo", oferecendo-lhe mais dinheiro do
            que indicado no anúncio.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            O comprador quer pagar por cheque ou transferência do dinheiro para
            uma conta que não existe.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Às vezes, envia uma falsa confirmação de pagamento que a dar
            entender que o dinheiro foi depositado em sua conta.
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>
        O que você pode fazer para se proteger?
      </h3>

      <p className={classes["caresItemText"]}>
        As cartas nigerianas são feitas para induzi-lo a enviar dinheiro ou bens
        para países estrangeiros. Por favor, não se envolva em tais negociações,
        que são na maioria das vezes fraudulentas.
      </p>

      <h3 className={classes["caresTitle"]}>Lembre-se</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Cuidado com emails pedindo-lhe para enviar bens para o estrangeiro.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Não aceite pagamentos por cheque.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Cuidado com falsos comprovativos de pagamento.
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToSendAbroad;
