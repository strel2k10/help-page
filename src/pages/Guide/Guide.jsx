import React from "react";

// Styles
import classes from "./guide.module.scss";

// Components

import GuideBoxesGrid from "./Components/GuideBoxesGrid/GuideBoxesGrid";

function Help() {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["howToUseTitleDiv"]}>
        <span className={classes["howToUseTitle"]}>Como utilizar</span>
      </div>
      <div className={classes["howToUseDescriptionDiv"]}>
        <span className={classes["howToUseDescription"]}>
          O nosso propósito é que possa comprar e vender próximo de si de um
          modo simples. Aqui pode encontrar de tudo, desde a sua próxima
          viatura, casa, telemóvel, emprego, a um animal de estimação, entre
          outros.
        </span>
      </div>

      <div className={classes["publishAdDiv"]}>
        <div className={classes["publishAdTitleDiv"]}>
          <span className={classes["publishAdTitle"]}>
            Publicar um anúncio nunca foi tão fácil!
          </span>
        </div>
        <div className={classes["publishAdDescriptionDiv"]}>
          <span className={classes["publishAdDescription"]}>
            Siga passo-a-passo as nossas indicações e coloque o seu anúncio
            online em apenas alguns minutos, sem qualquer dificuldade e de modo
            gratuito.
          </span>
        </div>
      </div>

      <div>
        <GuideBoxesGrid />
      </div>
    </div>
  );
}

export default Help;
