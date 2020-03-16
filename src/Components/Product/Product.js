import React, { Component } from "react";
import s from "./DropDown.module.css";

class Product extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className={s.dropdown}>
            <a href="javascript:void(0)" className={s.dropbtn}>
              Product
            </a>
            <div className={s.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Product;
