import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
  return (
    <footer className="bg-dark text-white py-2 pt-5">
  <div className="container">
    <div className="row">
   <div className="col-md-3 mb-4 ">
   
     <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Fotter-Logo-1.png" class="img-fluid" alt="Responsive image" />
     <p className="mt-4">
       Takalkar Eduhub Pvt. Ltd. with a directorial experience of 70+ years
       has evolved tremendously, both in their scale and the quality of
       education.
     </p>
     <p>
       <strong>Reach Out To Us</strong>
     </p>
     <p> <i class="fa-solid fa-envelope"></i>Email: learn@takalkarclasses.com</p>
     <p > <i class="fa-solid fa-phone"></i>Phone: +91 98810 98308</p>
       </div>
     
 <div className="col-md-2 mb-4 ml-3">
   <h5 className="text-uppercase">Quick Links</h5>
   <ul className="list-unstyled mt-4">
     <li><a href="/" className="text-white text-decoration-none">Home</a></li>
     <li><a href="/AboutUs" className="text-white text-decoration-none">About Us</a></li>
     <li><a href="/" className="text-white text-decoration-none">Courses</a></li>
     <li><a href="/" className="text-white text-decoration-none">Contact</a></li>
      </ul>
    </div>
<div className="col-md-2 mb-4">
  <h5 className="text-uppercase ">Tags</h5>
  <div className="mt-4">
    <span className="badge bg-secondary m-1">SSC</span>
    <span className="badge bg-secondary m-1">CBSE</span>
    <span className="badge bg-secondary m-1">ICSE</span>
    <span className="badge bg-secondary m-1">HSC</span>
    <span className="badge bg-secondary m-1">JEE</span>
    <span className="badge bg-secondary m-1">NEET / CET</span>
    <span className="badge bg-secondary m-1">8th</span>
    <span className="badge bg-secondary m-1">9th</span>
    <span className="badge bg-secondary m-1">10th</span>
  </div>
</div>
 <div className="col-md-2 mb-4 ">
            <h5 className="text-uppercase">Courses</h5>
            <ul className="list-unstyled mt-4">
              <li><a href="/terms" className="text-white text-decoration-none">Terms & Services</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/accessibility" className="text-white text-decoration-none">Accessibility</a></li>
              <li><a href="/help" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="/feedback" className="text-white text-decoration-none">Feedback</a></li>
            </ul>
          </div>
       <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">Subscribe to Our Newsletter</h6>
  <form>
    <div className=" mb-3 mt-4">
      <input type="email"className="form-control bg-secondary" placeholder="Enter your Email"/><br/>
      <button className="btn btn-success w-100" type="submit">
        Submit
      </button>
    </div>
  </form>
  <div>
  <h5 className="text-uppercase">Social</h5>
  <a  className="text-white me-2 mt-3 ml-2">
    <i class="fa-brands fa-facebook"></i>
  </a>
  <a  className="text-white me-2 ml-2">
    <i className="fab fa-twitter"></i>
  </a>
  <a  className="text-white ml-2 me-2">
    <i className="fab fa-instagram"></i>
  </a>

<i className="fab fa-whatsapp"></i>

        </div>
      </div>
    </div>
    <div className="text-center text-secondary">
      <p>
        &copy; 2024. All rights reserved. Designed & Developed by
        Vishal Salunke
      </p>
    </div>
  </div>
    </footer>
  );
};

export default Footer;