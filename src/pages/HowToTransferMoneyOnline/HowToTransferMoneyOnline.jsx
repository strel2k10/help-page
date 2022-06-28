import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToTransferMoneyOnline.module.scss";

// Components

function HowToTransferMoneyOnline() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Transferir dinheiro online</h2>
      <p className={classes["caresItemText"]}>
        Quando fizer pagamentos e transferências monetárias online, deve estar
        ciente de "Phishing". "Phishing" é quando alguém tenta enganá-lo para
        obter informações sensíveis, como senhas, contas bancárias e números de
        cartão de crédito, etc e muitas vezes é desencadeada por falsos emails
        de sites que conhece ou são da sua confiança, pedindo para clicar num
        link e preencher os seus dados pessoais / informações.
      </p>
      <p className={classes["caresItemText"]}>
        Existem exemplos de links em emails que afirmam ser de um banco para
        levar a uma página que parece pertencer ao banco (por exemplo, fica
        parecendo um site do banco), mas que é controlado por outras pessoas.
        Esses sites são usados para enganar as pessoas e obter informações
        pessoais.
      </p>
    </HelpPage>
  );
}

export default HowToTransferMoneyOnline;
