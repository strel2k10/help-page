import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToBrands.module.scss";

// Components

function HowToBrands() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Artigos de marca</h2>
      <p className={classes["caresItemText"]}>
        Por vezes pode ser difícil determinar se um produto é uma falsificação
        ou um original. Nós exigimos a todos os vendedores de mercadorias em
        determinadas categorias declarem que o produto que estão a vender é
        original, mas alguns vendedores pode ainda assim tentar vender produtos
        como software pirata ou falsos produtos de marca, mesmo que estes sejam
        proibidos no www.CustoJusto.pt.
      </p>

      <h3 className={classes["caresTitle"]}>Quando compra</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Pergunte pelo recibo original, para verificar se o produto é
            verdadeiro ou original.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Se não houver comprovativo, pode solicitar um encontro com o
            vendedor numa loja autorizada para verificar a autenticidade antes
            de efectuar o pagamento.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Por favor, avise-nos imediatamente se suspeitar que o produto
            anunciado não é original ou contrafeito.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Notifique-nos e apresente uma queixa na polícia, caso tenha sido
            enganado. O CustoJusto.pt irá cooperar com as investigações
            policiais.
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>Quando vende</h3>

      <p className={classes["caresItemText"]}>
        Deve garantir que o produto que está a vender é genuíno / original. Se
        indicar que está a vender produtos originais quando está realmente a
        vender mercadorias contrafeitas, pode ser considerado culpado de cometer
        fraude, podendo ser tomada uma acção legal contra si pela polícia.
      </p>

      <h3 className={classes["caresTitle"]}>Lembre-se</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>Peça o recibo original.</p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>Verificar autenticidade.</p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Artigos falsos ou contrafeitos são proibidos no CustoJusto.pt.
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToBrands;
