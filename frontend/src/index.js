import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Chat from "./components/Chat/Chat";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
