import React from "react";
import HelpPage from "../../Components/HelpPage/HelpPage";

// Styles
import classes from "./howToVehicles.module.scss";

// Components

function HowToVehicles() {
  return (
    <HelpPage>
      <h2 className={classes["caresMainTitle"]}>Veículos</h2>

      <h3 className={classes["caresTitle"]}>Quando compra</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Confirme se o veículo pertence realmente ao anunciante.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Veja pessoalmente o veículo e tente levá-lo a uma oficina
            independente.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Peça o livro de revisões e confirme a sua veracidade em termos de
            quilometragem e histórico.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Verifique sempre o histórico do veículo, se possível, antes de
            decidir comprá-lo. Se o veículo tiver um empréstimo, certifique-se
            que estará pago antes da mudança de proprietário.
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>Quando vende</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Solicite documentação para a identificação do potencial comprador
            (BI, passaporte, carta de condução, etc) antes de permitir um test
            drive e verifique com a sua companhia de seguros se você tem a
            necessária cobertura. Algumas apólices de seguro não cobrem suas
            perdas em caso de roubo ou dano se forem entregues as chaves do
            carro.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Indivíduos que se intitulam como concessionários poderão contactar
            com a promessa de vender o seu carro. Às vezes, eles deixam um
            pequeno depósito mas, em seguida, desaparecem com o carro.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Certifique-se de ter recebido o pagamento integral antes de entregar
            o veículo. Se o pagamento for por cheque, aguarde até que tenha sido
            autorizado pelo banco.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Seja prudente em situações quando os potenciais compradores são de
            um país diferente e que querem pagar com um cheque ou transferência
            bancária. Este é um método comum utilizado pelos fraudulentos.
          </p>
        </li>

        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Insista num Contrato Promessa de Compra e Venda.
          </p>
        </li>
      </ul>

      <h3 className={classes["caresTitle"]}>Lembre-se</h3>

      <ul className={classes["caresList"]}>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Ver a correcta documentação da pessoa interessada antes de permitir
            que faça um test drive do seu veículo.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Cuidado com falsos documentos e com os indivíduos que se intitulam
            como concessionários ou negociantes de automóveis.
          </p>
        </li>
        <li className={classes["caresItem"]}>
          <p className={classes["caresItemText"]}>
            Verifique o serviço de manutenção do veículo.
          </p>
        </li>
      </ul>
    </HelpPage>
  );
}

export default HowToVehicles;
