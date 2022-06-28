import React from "react";

// Styles
import classes from "./help.module.scss";

// Components

//import FAQSectionThemeDivClasses from "../../Styles/faqSectionThemeDiv.module.scss";
import { useRouteMatch } from "react-router-dom";

import FAQSellers from "./Components/FAQ/FAQSellers/FAQSellers";
import Contact from "./Components/Contact/Contact";
import FAQBuyers from "./Components/FAQ/FAQBuyers/FAQBuyers";
import HelpBoxes from "./Components/HelpBoxes/HelpBoxes";
import HelpPage from "../../Components/HelpPage/HelpPage";

const Help = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <HelpPage>
      <div className={classes["suggestedThemesDiv"]}>
        <span className={classes["suggestedThemes"]}>Temas sugeridos</span>
      </div>

      <HelpBoxes />
      <div className={classes["faqContactWrapper"]}>
        <div className={classes["faqSectionThemeDiv"]}>
          <FAQSellers />

          <FAQBuyers />
        </div>
        <div className={classes["contactWrapper"]}>
          <Contact />
        </div>
      </div>
    </HelpPage>
  );
};

export default Help;
