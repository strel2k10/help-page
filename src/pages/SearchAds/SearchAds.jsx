import React from "react";

// Styles
import classes from "./publishAd.module.scss";

// Components

// Images
import fillFormStep1 from "../../assets/help-ai-step-1.jpg";
import fillFormStep2 from "../../assets/help-ai-step-2.jpg";
import fillFormStep3 from "../../assets/help-ai-step-3.jpg";

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
            Depois de clicar no botão de{" "}
            <a href="https://www.custojusto.pt/ai/form/0">inserir anúncio</a>,
            escolha a categoria correcta e se pretende <b>vender</b>,
            <b>comprar</b>, <b>alugar</b> ou <b>procurar</b>.
          </p>
          <p className={classes["publishAdText"]}>
            Insira o <b>título</b>, o <b>texto descritivo</b> e <b>fotos</b>;
            lembre-se de que <b>quanto mais informação</b> tiver o seu anúncio,{" "}
            <b>maior a visibilidade</b> do mesmo.
          </p>
          <p className={classes["publishAdText"]}>
            Insira o <b>código postal</b> e confirme a sua <b>localidade</b>, e
            a seguir insira os seus dados. Se é <b>profissional</b>, deverá
            identificar-se como tal, indicando o <b>número fiscal</b> (não é
            visível no site).
          </p>
        </div>
      </div>

      <h3 className={classes["otherTitles"]}>
        Confirmar ou destacar o anúncio
      </h3>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep2} alt="fillFormStep2"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["publishAdText"]}>
            Confirme o seu anúncio clicando no botão laranja ao fundo da página.
          </p>
          <p className={classes["publishAdText"]}>
            Pode ainda destacar o seu anúncio, de forma a gerar mais
            visualizações e contactos. Basta para isso escolher um dos nossos
            serviços.
          </p>
        </div>
      </div>

      <h3 className={classes["otherTitles"]}>Anúncio inserido</h3>

      <div className={classes["fillFormDiv"]}>
        <div className={classes["fillformDivImage"]}>
          <img src={fillFormStep3} alt="fillFormStep3"></img>
        </div>
        <div className={classes["fillFormDivText"]}>
          <p className={classes["publishAdText"]}>
            O processo de colocação online do seu anúncio poderá levar o{" "}
            <b>tempo máximo de 3 horas</b>, todos os anúncios são revistos pela
            nossa equipa, estando activo por um <b>período de 60 dias</b>.
          </p>
          <p className={classes["publishAdText"]}>
            Findo este período ser-lhe-á <b>enviado um email</b> para eliminar
            ou revalidar o seu anúncio.
          </p>

          <p className={classes["publishAdText"]}>
            <b>Até lá faça Bons Negócios!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublishAd;
