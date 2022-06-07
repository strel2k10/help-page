import React, { Suspense } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

// Pages

import Help from "../pages/Help/Help";
import Guide from "../pages/Guide/Guide"
import FAQ from "../pages/FAQ/FAQ"
import AboutUs from "../pages/AboutUs/AboutUs"

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/help" />} />
            <Route exact path="/help" render={() => <Help />} />
            <Route exact path="/guide" render={() => <Guide />} />
            <Route exact path="/FAQ" render={() => <FAQ />} />
            <Route exact path="/aboutus" render={() => <AboutUs />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Routes;
