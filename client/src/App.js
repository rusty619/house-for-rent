import React,{useState, useEffect} from "react"
import {BrowserRoutes, Route, Switch} from "react-router-dom"
import Home from "./Components/Home";
import './App.css';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
