import React from "react";

// Styles
import classes from "./helpPage.module.scss";

// Components

//import FAQSectionThemeDivClasses from "../../Styles/faqSectionThemeDiv.module.scss";
import { useRouteMatch } from "react-router-dom";

import SideMenu from "../../Components/SideMenu/SideMenu";

const HelpPage = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className={classes["wrapper"]}>
      <SideMenu />
      <div className={classes["pageContent"]}>{props.children}</div>
    </div>
  );
};

export default HelpPage;
