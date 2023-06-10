import React from "react";
import "./App.css";
import "./ProjectComponents/MxPlayer.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";
import Home from "./ProjectComponents/Home";
import FavoriteMovie from "./ProjectComponents/FavoriteBtn";
import TodoMain from "./ProjectComponents/TodoList/TodoMain";

function App() {
  return (
    <>
      <Switch>
        <Route path="/todo" component={TodoMain} />
        <Route exact path="/anup_thakurwar" component={Home} />
        <Route path="/favourite" component={FavoriteMovie} />
        
      </Switch>
    </>
  );
}

export default App;
