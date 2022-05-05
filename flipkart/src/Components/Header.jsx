import React from "react";

import { Flipkartplus } from "../assets/Images/index";
import { Plus } from "../assets/Images/index";
import { Logo } from "../assets/Images/index";

import { CgSearch } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-first">
        <AiOutlineArrowLeft className="arrow-icon" />
        <img className="flip-logo" src={Logo} alt="" />
        <h4 className="mobiles-display">Samsung Mobiles</h4>
        <img src={Flipkartplus} alt="" />
         <div className="header-firstb">
          <span style={{ fontStyle: "11px", color: "white", fontStyle: "italic" }}>Explore</span>
          <span style={{ color: "#f9e107", fontSize: "11px", fontStyle: "italic" }}>Plus</span>
          <span>
            <img width="10" src={Plus} alt="" />
          </span>
        </div>
      </div>
      <div className="header-second">
        <input type="text" placeholder="Search for products,brands and more" />
        <CgSearch className="search-icon" />
      </div>
      <div className="header-third">
        <button>Login</button>
        <div className="hide">
          <ul className="dropdown-menu ">
            <li>
              <a href="#">New Customer?</a>
            </li>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Reward</a>
            </li>
            <li>
              <a href="#">GiftCard</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-fourth">
        <span>Become a Seller</span>{" "}
      </div>

      <div className="header-fifth">
        <span>More</span>
        <MdExpandMore className="expand-icon" />
      </div>
      <div className="header-sixth">
        <HiShoppingCart className="cart-icon" />
        <p className="cart-img">Cart</p>
        <p className="login-btn">Login</p>
      </div>
    </div>
  );
}

export default Header;
