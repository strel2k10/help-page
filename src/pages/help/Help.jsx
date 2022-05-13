import React, { Fragment } from "react";

// Styles
import "./help.scss";

// Components

import Boxes from "../../Components/Boxes/Boxes";
import FAQBuyers from "../../Components/FAQ/FAQBuyers/FAQBuyers";
import FAQSellers from "../../Components/FAQ/FAQSellers/FAQSellers";
import Contact from "../../Components/Contact/Contact";
import suggestedThemeClasses from "../../Styles/suggestedThemes.module.css";
import suggestedThemesDivClasses from "../../Styles/suggestedThemesDiv.module.css";
import FAQSectionThemeDivClasses from "../../Styles/faqSectionThemeDiv.module.css";

function Help() {
  return (
    <Fragment>
      <div className={suggestedThemesDivClasses["suggestedThemesDiv"]}>
        <span className={suggestedThemeClasses["suggestedThemes"]}>
          Temas sugeridos
        </span>
      </div>
      <div>
        <Boxes />
      </div>
      <div className={FAQSectionThemeDivClasses["faqSectionThemeDiv"]}>
        <FAQSellers />
        <Contact />
        <FAQBuyers />
      </div>
    </Fragment>
  );
}

export default Help;
