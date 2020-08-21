import React, { Component } from 'react';
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar.js";
import Users from "./components/Users.js";
import AddUser from "./forms/AddUser.js";
import UpdateUser from "./forms/UpdateUser.js";
import Contribute from "./pages/Contribute";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

class App extends Component {


  
  render(){
    return (
      <Router>
        <div className="container"> 
          <Navbar title="User App"/>
          <hr/>
          
          <Switch>
            <Route exact path = "/" component = {Users} />
            <Route exact path = "/add" component = {AddUser} />
            <Route exact path = "/github" component = {Contribute}/>
            <Route exact path = "/edit/:id" component = {UpdateUser}/>
            <Route component = {NotFound} />
          </Switch>
          
         
       </div>
      </Router>
      
    );
  } 
}

export default App;
