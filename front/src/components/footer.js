import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends Component {

    constructor(props) {
  
      super(props);
      
  
    }
  
    
  
    render() {
  
      return (
          

        <footer id="footer">

        <div class="footernewsletter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>We will send you the daily updates about the events</p>
                <form action="" method="post">
                  <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    
        <div class="footer-top">
          <div class="container">
            <div class="row">
    
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>IBACK Entertainment</h3>
                <p>
                  301/6 <br/>
                  Department of Industrial Management<br/>
                  University of Kelaniya <br/><br/>
                  <strong>Phone:</strong>07168789939020<br/>
                  <strong>Email:</strong>ibackinfo@gmail.com<br/>
                </p>
              </div>
    
              <div class="col-lg-3 col-md-6 footerlinks">
                
              </div>
    
              <div class="col-lg-3 col-md-6 footerlinks">
              </div>
    
              <div class="col-lg-3 col-md-6 footerlinks">
                <h4>Our Social Networks</h4>
                <p>Reach us from</p>
                <div class="social-links mt-3">
                  <a href="#"><i class="bx bxl-twitter"></i></a>
                  <a href="#" ><i class="bx bxl-facebook"></i></a>
                  <a href="#" ><i class="bx bxl-instagram"></i></a>
                  <a href="#" ><i class="bx bxl-skype"></i></a>
                  <a href="#" ><i class="bx bxl-linkedin"></i></a>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div class="container footerbottom">
          <div class="copyright">
            &copy; Copyright <strong><span>Team IBACK</span></strong>. All Rights Reserved
          </div>
          
        </div>
      </footer>

    
  
  
  
  
  
  
      )
  
  
  
  
  
    }
  
  
  
  
  
  } 
  