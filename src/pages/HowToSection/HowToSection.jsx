import React, { Fragment } from "react";

// Styles
import classes from "./howToSection.module.scss";

// Components

function HowToSection() {
  return (
    <Fragment>
      <div className={classes["wrapper"]}>
        <h3 className={classes["caresTitle"]}>
          O nosso Top 10 de cuidados a ter:
        </h3>

        <ul className={classes["caresList"]}>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemTextDanger"]}>
              <b>Nunca adiante dinheiro a um vendedor que não conheça!</b>
            </p>
          </li>

          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Nunca compre algo sem que saiba bastante informação sobre o
              produto e vendedor.
            </p>
          </li>

          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Obtenha o máximo de informação sobre o vendedor: nome, morada,
              telefone. Verifique se os dados são coerentes.
            </p>
          </li>

          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Tome precauções especiais quando a oferta parece ser{" "}
              <i>boa demais para ser verdade.</i>
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              <b>Nunca</b> faça <i>transferências</i> para o estrangeiro.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Tome precauções especiais quando a oferta parece ser boa demais
              para ser verdade.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Desconfie sempre quando lhe dizem que tem de fazer uma{" "}
              <i>primeira transferência</i> antes de lhe enviarem o produto. É
              muito frequente que lhe peçam que adiante um pequeno valor para
              pagamento de taxas, pagamentos esses para bancos no estrangeiro,
              como Money Gra ou Western Union. A nossa recomendação é que não o
              faça. O mais provável é que não veja nem o dinheiro nem o produto
              que pensava comprar.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Mesmo quando o vendedor lhe apresenta informação pessoal ou o
              número da conta bancária, isso não o protege de ser enganado.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Sempre que possível, solicite a factura/recibo original do produto
              e um recibo da compra.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              O CustoJusto.pt nunca lhe envia uma confirmação de pagamento.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Se for o vendedor, não envie o produto sem ter as condições de
              pagamento devidamente acordadas e finalizadas.
            </p>
          </li>
        </ul>

        <h3 className={classes["caresTitle"]}>Lembre-se</h3>

        <ul className={classes["caresList"]}>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>Nunca adiante dinheiro.</p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Os produtos enviados por correio também podem ser arriscados.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Não envie dinheiro para alguém num país estrangeiro.
            </p>
          </li>
          <li className={classes["caresItem"]}>
            <p className={classes["caresItemText"]}>
              Evite utilizar a maioria dos serviços de pagamento internacionais.
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default HowToSection;
