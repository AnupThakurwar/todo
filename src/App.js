import React, {  } from "react";

import "./App.css";

import "./ProjectComponents/MxPlayer.css";

import { Switch, Route } from "react-router-dom";
import Home from "./ProjectComponents/Home";
import FavoriteMovie from "./ProjectComponents/FavoriteBtn";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/anup_thakurwar" component={Home} />
        <Route path="/Favourite" component={FavoriteMovie} />
      </Switch>
    </>
  );
}

export default App;
