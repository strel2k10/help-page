import React from "react";

// Styles
import classes from "./searchAds.module.scss";

// Components

// Images
import howToReply1 from "../../assets/howto_reply_site_1.png";
import howToReply2 from "../../assets/howto_reply_search_2.jpg";
import howToReply3 from "../../assets/howto_reply_results_3.png";
import howToReply4 from "../../assets/howto_reply_fill_4.png";
import howToReply5 from "../../assets/howto_reply_success_5.jpg";
import HelpPage from "../../Components/HelpPage/HelpPage";

const SearchAds = (props) => {
  return (
    <HelpPage>
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
          <img
            className={classes["fillformImage"]}
            src={howToReply1}
            alt="fillFormStep1"
          ></img>
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
          <img
            className={classes["fillformImage"]}
            src={howToReply2}
            alt="fillFormStep2"
          ></img>
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
          <img
            className={classes["fillformImage"]}
            src={howToReply3}
            alt="fillFormStep3"
          ></img>
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

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img
            className={classes["fillformImage"]}
            src={howToReply4}
            alt="fillFormStep4"
          ></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            Entre em contacto com o anunciante, inserindo o seu <b>nome</b>,{" "}
            <b>email</b> e<b>contacto telefónico</b>, <b>se desejar</b>. Em
            seguida detalhe na caixa de texto o seu <b>pedido de informação</b>.
            Por fim, clique em <b>Enviar</b>.
          </p>
        </div>
      </div>

      <h4 className={classes["otherTitles"]}>Resposta enviada</h4>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img
            className={classes["fillformImage"]}
            src={howToReply5}
            alt="fillFormStep5"
          ></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["searchAdsText"]}>
            O seu email foi enviado com sucesso! Agora, aguarde pela resposta do
            anunciante e se assim for, marque um encontro, veja o produto e
            acorde os detalhes da transação.
          </p>
          <p>
            <b className={classes["searchAdsText"]}>
              Até lá faça Bons Negócios!
            </b>
          </p>
        </div>
      </div>
    </HelpPage>
  );
};

export default SearchAds;
