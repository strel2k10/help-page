import React from "react";

// Styles
import classes from "./help.module.scss";

// Components

import Boxes from "./Components/HelpBoxes/HelpBoxes";
import FAQBuyers from "./Components/FAQ//FAQBuyers/FAQBuyers";
import FAQSellers from "./Components/FAQ/FAQSellers/FAQSellers";
import Contact from "./Components/Contact/Contact";

function HelpV2() {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["suggestedThemesDiv"]}>
        <span className={classes["suggestedThemes"]}>
          Temas sugeridos
        </span>
      </div>

      <Boxes />
      <div className={classes["faqContactWrapper"]}>
        <div className={classes["faqSectionThemeDiv"]}>
          <FAQSellers />

          <FAQBuyers />
        </div>
        <div className={classes["contactWrapper"]}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HelpV2;
