import React from "react";

// Styles
import classes from "./searchAds.module.scss";

// Components

// Images
import fillFormStep1 from "../../assets/help-ai-step-1.jpg";
import fillFormStep2 from "../../assets/help-ai-step-2.jpg";
import fillFormStep3 from "../../assets/help-ai-step-3.jpg";

const SearchAds = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["searchAdsTitle"]}>
        <h2>Veja como pesquisar e responder no CustoJusto.pt</h2>
      </div>
      <p className={classes["searchAdsText"]}>
        Siga passo-a-passo as nossas indicações e a sua pesquisa será efectuada
        sem qualquer problema.
      </p>
      <h3 className={classes["otherTitles"]}>Explicação passo-a-passo</h3>
      <p className={classes["searchAdsText"]}>
        Explicação rápida dos passos necessários para pesquisar e responder a
        anúncios no CustoJusto.pt. Qualquer dúvida que tenha não hesite em
        entrar em contacto com a nossa equipa de suporte. Sempre disponível para
        o ajudar e responder às suas dúvidas.
        <br /> Obrigado.
      </p>
      <h4 className={classes["otherTitles"]}>
        Entre em <a href="https://www.custojusto.pt">CustoJusto.pt</a>
      </h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep1} alt="fillFormStep1"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Selecione a sua zona, por exemplo,{" "}
            <a href="https://www.custojusto.pt/lisboa">Lisboa</a>,
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>
        Preencha os critérios da pesquisa
      </h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep2} alt="fillFormStep2"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Para que encontre mais facilmente o que procura,{" "}
            <b>afine a sua pesquisa</b>, selecionando a <b>categoria</b> e{" "}
            <b>sub categoria</b>. Por exemplo, neste caso vamos{" "}
            <b>procurar uma moradia</b>.
          </p>
          <p className={classes["searchAdsText"]}>
            O tipo de negócio que pretende, se é uma venda, aluguer, neste caso
            consideramos <b>venda</b>.
          </p>
          <p className={classes["searchAdsText"]}>
            Agora detalhe as suas preferências: <b>Preço</b>, <b>área util</b>,{" "}
            <b>tipologia</b> e <b>concelho</b>.
          </p>
          <p className={classes["searchAdsText"]}>
            Por fim <b>clique no botão azul de pesquisa</b>.
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>Veja os resultados</h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep3} alt="fillFormStep3"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Em seguida, aparecerão muitos anúncios que correspondem à sua
            procura, que poderá sempre organizar <b>por preço</b> ou{" "}
            <b>guardá-los</b>. <b>Clique em guardar</b> para revê-los mais
            tarde. Estes anúncios ficam guardados na secção "
            <b>Meus Anúncios</b>".
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>
        Selecione os anúncios que quer responder
      </h4>
    </div>
  );
};

export default SearchAds;
