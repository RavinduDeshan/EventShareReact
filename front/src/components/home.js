import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import Footer from './footer'
import AOS from 'aos';

AOS.init({
    duration: 1200,
  })

export default class Home extends Component {

    constructor(props) {
  
      super(props);
      
  
    }
  
    
  
    render() {
  
      return (

        <div>
            <Navbar></Navbar>

        <section id="hero" class="d-flex align-items-center" style={{backgroundImage:`url('assets/img/heroFront.jpg')`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

        <div class="container">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Event Management System</h1>
              <h2>We help you in hosting and making tickets for events enmnsgbnns MIt Kelaniya </h2>
              <div class="d-lg-flex">
                <a href="#about" class="btn-get-register scrollto">Register</a>
                
              </div>
            </div>
            <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
        
            </div>
          </div>
        </div>
    
      </section>



{/* recent events */}

<section id="Events" class="events section-bg cta">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h1>All Events</h1>
        <p>Below are all the events organized by our Company</p>
      </div>

      <div class="row">

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div> 
        </div>  
        

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
      
      
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

      </div>

    </div>
  </section>



{/* recomennded events */}

<section id="Events" class="recevents section-bg cta1">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h1>Recommended Events</h1>
        <p>Below are all the events organized by our Company</p>
      </div>

      <div class="row">

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="iconbox">
           <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
           <h4><a href="">Lorem Ipsum</a></h4>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div> 
        </div>  
        

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
           <h4><a href="">Lorem Ipsum</a></h4>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
           <h4><a href="">Lorem Ipsum</a></h4>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
      
      
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="iconbox">
            <img src="assets/img/images1.jpg" alt="" class="img-fluid" style={{"width":"100%"}}/>
            <h4><a href="">Lorem Ipsum</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

      </div>

    </div>
  </section>





<Footer></Footer>





  </div>
  
  
  
  
  
      )
  
  
  
  
  
    }
  
  
  
  
  
  } 
  