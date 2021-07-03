import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main/Main";
import classes from "./App.module.css";
import PartPage from "./components/PartPage/PartPage";

const App = () => {
  return (
    <div className={classes.App}>
      <Route exact path="/part/:name/:type/:price">
        <PartPage />
      </Route>

      <Route exact path="/">
        <Main />
      </Route>
    </div>
  );
};

export default App;
