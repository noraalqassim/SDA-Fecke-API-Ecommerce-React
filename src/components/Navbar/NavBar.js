import React from "react";

import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import { FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

export default function NavBar() {
  return (
    <header className="p-2">
      <input type="checkbox" name="#" id="toggler" />
      <label for="toggler">
        <FaBars />
      </label>
      <a class="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav class="navbar">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/products">Products</Link>
        </a>
        <a href="#">Contact Us</a>
      </nav>
      <div class="icons">
        <Link to="/wishList"><FaHeart /></Link>
        <a href="#">
          <FaRegUser />
        </a>
        <a href="#">
        <Link to="/cart"><HiShoppingCart /></Link>
          <span>0</span>
        </a>
      </div>
    </header>
  );
}
