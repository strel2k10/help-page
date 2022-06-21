import React from "react";

// Styles
import classes from "./help.module.scss";

// Components

//import FAQSectionThemeDivClasses from "../../Styles/faqSectionThemeDiv.module.scss";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import FAQ from "../FAQ/FAQ";
import AboutUs from "../AboutUs/AboutUs";
import HelpV2 from "./Help_v2";
import SideMenuComponent from "../../Components/SideMenu/SideMenuComponent/SideMenuComponent";

const Help = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className={classes["wrapper"]}>
      <div>
        <SideMenuComponent
          destination_url="/help"
          boxTitle="Ajuda"
          options={[{ url: "/help", listItem: "Ajuda" }]}
        />
        <Switch>
          <Route exact path={`${url}`} render={() => <HelpV2 />} />
          <Route exact path={`${url}/faq`} render={() => <FAQ />} />
          <Route exact path={`${url}/aboutus`} render={() => <AboutUs />} />
        </Switch>
      </div>
    </div>
  );
};

export default Help;
