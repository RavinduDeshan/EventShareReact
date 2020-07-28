import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    constructor(props) {
  
      super(props);
      
  
    }
  
    
  
    render() {
  
      return (

        <header id="header" class="fixed-top" >
    <div class="container d-flex align-items-center"> 
	  
      <h2 class="logo"><a href="LandingPage.html">IBACK Entertainment</a></h2>
	  
      
     
    
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="LandingPage.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Events">Events</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="Contact.html">Contact</a></li>

        </ul>
      </nav>

      <a href="#about" class="btn-get-signIn scrollto">Sign In</a>

    </div>
  </header>
  
  
  
  
  
  
      )
  
  
  
  
  
    }
  
  
  
  
  
  } 
  