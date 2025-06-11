import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul className="list-unstyled links">
                <li><NavLink to="tel://11234567890">+1(123)-456-7890</NavLink></li>
                <li><NavLink to="tel://11234567890">+1(123)-456-7890</NavLink></li>
                <li>
                  <NavLink to="mailto:info@mydomain.com">info@mydomain.com</NavLink>
                </li>
              </ul>
            </div>
           
          </div>
        
          <div className="col-lg-4">
            <div className="widget">
              <h3>Sources</h3>
              <ul className="list-unstyled float-start links">
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="#">Mission</NavLink></li>
                <li><NavLink to="#">Terms</NavLink></li>
                <li><NavLink to="#">Privacy</NavLink></li>
              </ul>
              <ul className="list-unstyled float-start links">
                <li><NavLink to="#">Partners</NavLink></li>
                <li><NavLink to="#">Business</NavLink></li>
                <li><NavLink to="#">Careers</NavLink></li>
                <li><NavLink to="#">Blog</NavLink></li>
                <li><NavLink to="#">FAQ</NavLink></li>
                <li><NavLink to="#">Creative</NavLink></li>
              </ul>
            </div>
            
          </div>
          
          <div className="col-lg-4">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled links">
                <li><NavLink to="#">Our Vision</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
              </ul>

              <ul className="list-unstyled social">
                <li>
                  <NavLink to="#"><span className="icon-instagram"></span></NavLink>
                </li>
                <li>
                  <NavLink to="#"><span className="icon-twitter"></span></NavLink>
                </li>
                <li>
                  <NavLink to="#"><span className="icon-facebook"></span></NavLink>
                </li>
                <li>
                  <NavLink to="#"><span className="icon-linkedin"></span></NavLink>
                </li>
                <li>
                  <NavLink to="#"><span className="icon-pinterest"></span></NavLink>
                </li>
                <li>
                  <NavLink to="#"><span className="icon-dribbble"></span></NavLink>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
      

        <div className="row mt-5">
          <div className="col-12 text-center">
         

            <p>
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              . All Rights Reserved. &mdash; Designed with love by
              <NavLink to="https://untree.co">Untree.co</NavLink>
         
            </p>
            <div>
              Distributed by
              <NavLink to="https://themewagon.com/" target="_blank">themewagon</NavLink>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Footer