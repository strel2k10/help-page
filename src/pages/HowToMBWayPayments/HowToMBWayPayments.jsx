import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToMBWayPayments.module.scss";

// Components

function HowToMBWayPayments() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Pagamentos por MBWay</h2>
      <p className={classes["caresItemText"]}>
        Foram detectadas tentativas de burla utilizando a aplicação MBWay. De
        forma a garantir que não é vítima de burla, recomendamos que tome as
        seguintes precauções:
      </p>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            <b>
              NUNCA deve adicionar à sua conta MB Way, um número de telemóvel
              que não o seu
            </b>
            , quer seja através do Multibanco, quer seja através do homebanking
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Nunca forneça dados confidenciais ou pessoais como resposta a
            mensagens de correio eletrónico ou via sms, mesmo que a origem da
            solicitação aparente ser legítima
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Não partilhe códigos de validação com terceiros que não conhece
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>
        Exemplo de tácticas seguidas neste tipo de burlas
      </h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            O suposto interessado telefona para o contacto disponível no anúncio
            e solicita que a compra seja efectuada via MBWay
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Este pede ao vendedor que se dirija a uma caixa Multibanco e que
            aceda à opção MBWay. De seguida, pede que insira um número de
            telefone, pertencente ao próprio comprador
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            O comprador pede ainda para digitar um código de 6 dígitos por ele
            indicado
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Ao associar os referidos número de telefone e código de 6 dígitos,
            <b>
              está a dar ao suposto comprador a possibilidade deste fazer
              transacções na sua conta
            </b>
            , através da aplicação MBWay, incluindo o levantamento de dinheiro
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>Recordamos</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            A aplicação do MBWay apenas deve ser usada com o seu próprio número
            de telefone e com um código secreto, determinado pelo titular
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemListText"]}>
            Caso seja confrontado com alguma situação idêntica, sugerimos que
            nos{" "}
            <a href="https://www.custojusto.pt/ajuda-contacto?section=6">
              contacte de imediato
            </a>{" "}
            e nos forneça a informação
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToMBWayPayments;
