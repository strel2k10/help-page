import React from "react";

// Styles
import classes from "./help.module.scss";

// Components

import Boxes from "../../Components/Boxes/Boxes";
import FAQBuyers from "../../Components/FAQ/FAQBuyers/FAQBuyers";
import FAQSellers from "../../Components/FAQ/FAQSellers/FAQSellers";
import Contact from "../../Components/Contact/Contact";
import suggestedThemeClasses from "../../Styles/suggestedThemes.module.css";
// import suggestedThemesDivClasses from "../../Styles/suggestedThemesDiv.module.css";
import FAQSectionThemeDivClasses from "../../Styles/faqSectionThemeDiv.module.scss";

function Help() {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["suggestedThemesDiv"]}>
        <span className={suggestedThemeClasses["suggestedThemes"]}>
          Temas sugeridos
        </span>
      </div>

      <Boxes />
      <div className={classes["faqContactWrapper"]}>
        <div className={FAQSectionThemeDivClasses["faqSectionThemeDiv"]}>
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

export default Help;
