import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";



import  Footer from './components/footer'
import  Home from './components/home'
import  Navbar from './components/navbar'

function App() {
  return (

    <Router>
    <Switch>

      <Route path="/" component={Home}/>
      
    </Switch>

  </Router>

   
  );
}

export default App;
