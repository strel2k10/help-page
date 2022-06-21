import React, { Suspense } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

// Pages

import Help from "../pages/Help/Help";
import Guide from "../pages/Guide/Guide";
import FAQ from "../pages/FAQ/FAQ";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import PublishAd from "../pages/PublishAd/PublishAd";
import SearchAds from "../pages/SearchAds/SearchAds";
import AdvancedSearch from "../pages/AdvancedSearch/AdvancedSearch";
import HowToSection from "../pages/HowToSection/HowToSection";
import HowToSendProducts from "../pages/HowToSendProducts/HowToSendProducts";
import SideMenu from "../Components/SideMenu/SideMenu";

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/help" />} />
      <Route path="/help" render={() => <Help />} />
      <Route exact path="/guide" render={() => <Guide />} />
      <Route exact path="/help/FAQ" render={() => <FAQ />} />
      <Route exact path="/help/aboutus" render={() => <AboutUs />} />
      <Route exact path="/contact" render={() => <Contact />} />
      <Route exact path="/publishad" render={() => <PublishAd />} />
      <Route exact path="/searchads" render={() => <SearchAds />} />
      <Route exact path="/advancedsearch" render={() => <AdvancedSearch />} />
      <Route exact path="/howtosection" render={() => <HowToSection />} />
      <Route
        exact
        path="/howtosendproducts"
        render={() => <HowToSendProducts />}
      />
      <Route path="/sidemenutemp" render={() => <SideMenu />} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;
