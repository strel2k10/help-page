import React from "react";
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
import HowToStolenArticles from "../pages/HowToStolenArticles/HowToStolenArticles";
import HowToVehicles from "../pages/HowToVehicles/HowToVehicles";
import HowToBrands from "../pages/HowToBrands/HowToBrands";
import HowToSendAbroad from "../pages/HowToSendAbroad/HowToSendAbroad";
import HowToTransferMoneyOnline from "../pages/HowToTransferMoneyOnline/HowToTransferMoneyOnline";
import HowToProtectYourself from "../pages/HowToProtectYourself/HowToProtectYourself";
import HowToSMSs from "../pages/HowToSMSs/HowToSMSs";
import HowToATMPayments from "../pages/HowToATMPayments/HowToATMPayments";
import HowToMBWayPayments from "../pages/HowToMBWayPayments/HowToMBWayPayments";
import ContactFormAds from "../pages/ContactFormAds/ContactFormAds";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/help" />} />
        <Route exact path="/help" render={() => <Help />} />
        <Route exact path="/guide" render={() => <Guide />} />
        <Route exact path="/FAQ/:activeKey?" render={() => <FAQ />} />
        <Route exact path="/aboutus" render={() => <AboutUs />} />
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
        <Route
          exact
          path="/howtostolenarticles"
          render={() => <HowToStolenArticles />}
        />
        <Route exact path="/howtovehicles" render={() => <HowToVehicles />} />
        <Route exact path="/howtobrands" render={() => <HowToBrands />} />
        <Route
          exact
          path="/howtosendabroad"
          render={() => <HowToSendAbroad />}
        />
        <Route
          exact
          path="/howtotransfermoneyonline"
          render={() => <HowToTransferMoneyOnline />}
        />
        <Route
          exact
          path="/howtoprotectyourself"
          render={() => <HowToProtectYourself />}
        />
        <Route exact path="/howtoSMSs" render={() => <HowToSMSs />} />
        <Route
          exact
          path="/howtoATMpayments"
          render={() => <HowToATMPayments />}
        />
        <Route
          exact
          path="/howtoMBWaypayments"
          render={() => <HowToMBWayPayments />}
        />
        <Route exact path="/contactFormAds" render={() => <ContactFormAds />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
