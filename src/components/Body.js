import React from "react";
import HomePage from "../Pages/HomePage";
import MenPage from "../Pages/MenPage";
import WomenPage from "../Pages/WomenPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Body() {
  return (
    <Switch>
      
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Men" component={MenPage} />
      <Route exact path="/Women" component={WomenPage} />
      
    </Switch>
  );
}
export default Body;
