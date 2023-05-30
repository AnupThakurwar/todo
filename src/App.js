import React from "react";
import "./App.css";
import "./ProjectComponents/MxPlayer/MxPlayer.css";
import { Switch, Route } from "react-router-dom";
import Home from "./ProjectComponents/MxPlayer/Home";
import FavoriteMovie from "./ProjectComponents/MxPlayer/FavoriteBtn";
import TodoMain from "./ProjectComponents/TodoList/TodoMain";
// import FormProject from "./ProjectComponents/FormProject";
// import LoginForm from "./ProjectComponents/NewProject/LoginForm";
// import Operation from "./ProjectComponents/Operation";
// import store from "./ProjectComponents/store";

function App() {
  
  return (
    <>
      <Switch>
        <Route path="/todo" component={TodoMain} />
        <Route exact path="/" component={Home} />
        <Route path="/favourite" component={FavoriteMovie} />
        {/* <Route path="/form" component={FormProject} /> */}
        {/* <Route path='/loginform' component={LoginForm}></Route> */}
        {/* <Route path='/operations' component={Operation}></Route> */}
      </Switch>
    </>
  );
}

export default App;
