import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import NotFound from "./404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
