import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "./Menu.module.css";
import Customers from "./Customers/Customers";
import Employees from "./Employees/Employees";
import Product from "./Product/Product";
import Suppliers from "./Suppliers/Suppliers";
// import './App.css'

class Menu extends Component {
  render() {
    return (
      <nav className={s.nav}>
        <h1>DASHDboard</h1>
        <ul className={s.Menu}>
          <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="/categories">
            <li>Categories</li>
          </Link>

          <Link to="/customers">
            <li>
              <Customers />
            </li>
          </Link>

          <Link to="/employees">
            <li>
              <Employees />
            </li>
          </Link>
          <Link to="/product">
            <li>
              <Product />
            </li>
          </Link>
          <Link to="/suppliers">
            <li>
              <Suppliers />
            </li>
          </Link>
        </ul>

        <ul className={s.Menu1}>
          <Link to="/registration">
            <li>Sign Up</li>
          </Link>
          <Link to="/authorization">
            <li>Sign In</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Menu;
