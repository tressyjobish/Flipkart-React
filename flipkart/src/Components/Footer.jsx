import React from "react";
import "../Styles/Footer.css";
import { down } from "../assets/Images/index";
import { downlord } from "../assets/Images/index";
import { sr } from "../assets/Images/index";
import { staar } from "../assets/Images/index";
import { social } from "../assets/Images/index";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About</h2>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers </a>
          <a href="#">Flipkart Stories</a>
          <a href="#">Press</a>
          <a href="#">Flipkart Wholesale</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className="footer-heading footer-2">
          <h2>HELP</h2>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns </a>
          <a href="#">FAQ</a>
          <a href="#">Report Infringement</a>
        </div>
        <div className="footer-heading footer-3">
          <h2>Policy</h2>
          <a href="#">Return Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Security </a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
          <a href="#">EPR Compliance</a>
        </div>
        <div className="footer-heading footer-4">
          <h2>Social</h2>
          <a href="#">facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube </a>
        </div>
        <div className="footer-heading footer-5">
          <h2>Mail Us:</h2>
          <a href="#">Flipkart Internet Private Limited</a>
          <a href="#">Building Alyssa,Begonia &</a>
          <a href="#">Clove Embassy Tech Village </a>
          <a href="#">Outer Ring Road Devarabeesanahail Village</a>
          <a href="#">Bengaluru,560103</a>
          <a href="#">Karnataka India</a>
        </div>
        <div className="footer-heading footer-6">
          <h2>Registered Office Address:</h2>
          <a href="#">Flipkart Internet Private Limited</a>
          <a href="#">Buildings Alyssa Begonia</a>
          <a href="#">Clove Embassy Tech Vilage </a>
          <a href="#">Outer Ring RoAD</a>
          <a href="#">Press</a>
          <a href="#">Flipkart Wholesale</a>
          <a href="#">Corporate Information</a>
        </div>
        {/* <div className="footer-icon">
          <h1>footer</h1>
        </div> */}
      </div>
      <div className="footer-content">
        <div className="footer-link">
          <img src={down} alt="" />
          <h3 className="become">Become a seller</h3>
        </div>
        <div className="footer-link">
          <img src={downlord} alt="" />
          <h3 className="become">Advertise</h3>
        </div>
        <div className="footer-link">
          <img src={sr} alt="" />
          <h3 className="become">Gift Card</h3>
        </div>
        <div className="footer-link">
          <img src={staar} alt="" />
          <h3 className="become">Become a seller</h3>
        </div>
        <div className="footer-link">
          {" "}
          <span> © 2007-2022</span>
          <span>Flipkart</span>
        </div>
        <div className="footer-link">
          <img src={social} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
