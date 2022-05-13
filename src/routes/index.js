import React, { Suspense } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

// Pages

import Help from "../pages/help/Help";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/help" />} />
            <Route exact path="/help" render={() => <Help />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Routes;
