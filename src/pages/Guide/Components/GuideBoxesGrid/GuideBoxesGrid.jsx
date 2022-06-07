import React from "react";

// Styles
import classes from "./guideBoxesGrid.module.scss";

// Components
import GuideBox from "../GuideBox/GuideBox";

const GuideBoxes = (props) => {
  return (
    <div className={classes["guideBoxesGrid"]}>
      <GuideBox src={"www.google.pt"} guideBoxTitle="Como inserir um anúncio" />
      <GuideBox src={"www.youtube.com"} guideBoxTitle="Como pesquisar anúncios" />
      <GuideBox src={"www.sapo.pt"} guideBoxTitle="Pesquisa avançada" />
    </div>
  );
};

export default GuideBoxes;
