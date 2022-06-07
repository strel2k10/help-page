import React, { Fragment } from "react";

// Styles
import "./guide.scss";

// Components

import GuideBoxesGrid from "./Components/GuideBoxesGrid/GuideBoxesGrid";

function Help() {
  return (
    <Fragment>
      <div className={["howToUseTitleDiv"]}>
        <span className={["howToUseTitle"]}>Como utilizar</span>
      </div>
      <div className={["howToUseDescriptionDiv"]}>
        <span className={["howToUseDescription"]}>
          O nosso propósito é que possa comprar e vender próximo de si de um
          modo simples. Aqui pode encontrar de tudo, desde a sua próxima
          viatura, casa, telemóvel, emprego, a um animal de estimação, entre
          outros.
        </span>
      </div>

      <div className={["publishAdDiv"]}>
        <div className={["publishAdTitleDiv"]}>
          <span className={["publishAdTitle"]}>
            Publicar um anúncio nunca foi tão fácil!
          </span>
        </div>
        <div className={["publishAdDescriptionDiv"]}>
          <span className={["publishAdDescription"]}>
            Siga passo-a-passo as nossas indicações e coloque o seu anúncio
            online em apenas alguns minutos, sem qualquer dificuldade e de modo
            gratuito.
          </span>
        </div>
      </div>

      <div>
        <GuideBoxesGrid />
      </div>
    </Fragment>
  );
}

export default Help;
