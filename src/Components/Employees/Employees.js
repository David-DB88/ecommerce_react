import React, { Component } from "react";
import s from "./DropDown.module.css";
import { Link } from "react-router-dom";

class Employees extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className={s.dropdown}>
            <a href="javascript:void(0)" className={s.dropbtn}>
              Employees
            </a>
            <div className={s.dropdownContent}>
              <Link to="/allemployees">All Employees</Link>
              <Link to="/create_employee">Create a New Employee</Link>
              <Link to="/find_the_employee">Find The Employee</Link>
              <Link to="/update_employee">Update the Employee</Link>
              <Link to="/delete_employee">Delete the Employee</Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Employees;
