import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "./layouts/Admin";

import "../src/assets/css/material-dashboard-react.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/BrokerTools" component={Admin} />
      <Redirect from="/" to="/BrokerTools/corpActions" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
