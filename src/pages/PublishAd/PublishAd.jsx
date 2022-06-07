import React from "react";

// Styles
import classes from "./publishAd.module.scss";

// Components

// Images
import fillFormStep1 from "../../assets/help-ai-step-1.jpeg";
// import faqStarImage from "../../assets/icon_star.png";

const PublishAd = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["publishAdTitle"]}>
        <h2>Publicar um anúncio nunca foi tão fácil!</h2>
      </div>
      <p className={classes["publishAdText"]}>
        Siga passo-a-passo as nossas indicações e o seu anúncio será publicado
        sem dificuldade e de modo gratuito em alguns minutos.
      </p>
      <h3 className={classes["otherTitles"]}>Explicação passo-a-passo</h3>
      <p className={classes["publishAdText"]}>
        Se preferir, siga a explicação rápida de apenas 3 passos para inserir um
        anúncio no CustoJusto.pt.
        <br /> Qualquer dúvida que tenha não hesite em entrar em contacto com a
        nossa equipa de suporte. Sempre disponível para o ajudar e responder às
        suas dúvidas. Obrigado.
      </p>
      <h3 className={classes["otherTitles"]}>Preencher o formulário</h3>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep1} alt="fillFormStep1"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["publishAdText"]}>
            Depois de clicar no botão de inserir anúncio, escolha a categoria
            correcta e se pretende vender, comprar, alugar ou procurar.
          </p>
          <p className={classes["publishAdText"]}>
            Insira o título, o texto descritivo e fotos; lembre-se de que quanto
            mais informação tiver o seu anúncio, maior a visibilidade do mesmo.
          </p>
          <p className={classes["publishAdText"]}>
            Insira o código postal e confirme a sua localidade, e a seguir
            insira os seus dados. Se é profissional, deverá identificar-se como
            tal, indicando o número fiscal (não é visível no site).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublishAd;
