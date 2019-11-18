import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
