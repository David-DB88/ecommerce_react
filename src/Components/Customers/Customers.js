import React, { Component } from "react";
import s from "./DropDown.module.css";
import { Link } from "react-router-dom";

class Customers extends Component {
  state = {
    customers: null
  };

  render() {
    return (
      <div>
        <ul>
          <li className={s.dropdown}>
            <a href="javascript:void(0)" className={s.dropbtn}>
              Customers
            </a>
            <div className={s.dropdownContent}>
              <Link to="/allcustomers">All Customers</Link>
              <Link to="/create_customer">Create a New Customer</Link>
              <Link to="/find_the_customer">Find The Customer</Link>
              <Link to="/update_customer">Update the Customer</Link>
              <Link to="/delete_customer">Delete the Customer</Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Customers;
