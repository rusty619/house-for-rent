import React,{useState, useEffect} from "react"
import {BrowserRoutes, Route, Router, Switch} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SingleHouse from "./Components/SingleHouse";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/home/:id" exact>
          <SingleHouse />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
