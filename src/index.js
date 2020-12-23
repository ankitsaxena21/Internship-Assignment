import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Notepad from './components/Notepad'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/note" component={Notepad} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
