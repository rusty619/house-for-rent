import React,{useState, useEffect, Component} from "react"
import {BrowserRoutes, Route, Router, Switch} from "react-router-dom"
import axios from 'axios'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SingleHouse from "./Components/SingleHouse";
import Footer from "./Components/Footer";
import './App.css';

function App(){

   const [isLoggedIn,setLoggedIn] = useState(false)
   const [user, setUser] = useState({})

   loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})
    .then(res => {
      if(res.data.logged_In){
        this.handleLogin(res)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors: ', error))
   }

   handleLogin = (data) => {
     setLoggedIn(true)
     setUser(data.user)
   }

   handleLogout = () => {
    setLoggedIn(false)
    setUser({})
   }

  componentDidMount = () => {
    this.loginStatus()
   }

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
        <Route path="/login" exact></Route>
        <Route path="/signup" exact></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
