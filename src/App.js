import React, {  } from "react";
import "./App.css";
import "./ProjectComponents/MxPlayer.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ReadMoreReact from '../node_modules/read-more-react/dist/components/ReadMoreReact';

import { Switch, Route } from "react-router-dom";
import Home from "./ProjectComponents/Home";
import FavoriteMovie from "./ProjectComponents/FavoriteBtn";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/anup_thakurwar" component={Home} />
        <Route path="/favourite" component={FavoriteMovie} />
      </Switch>
{/* 
     <h1>jsgsgdue</h1> */}
        
    </>
  );
}

export default App;
