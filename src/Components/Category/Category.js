import React, { Component } from "react";
import s from "./DropDown.module.css";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className={s.dropdown}>
            <a href="javascript:void(0)" className={s.dropbtn}>
              Category
            </a>
            <div className={s.dropdownContent}>
              <Link to="/allproducts">All Products</Link>
              <Link to="/create_product">Create a New Product</Link>
              <Link to="/find_the_product">Find The Product</Link>
              <Link to="/update_product">Update the Product</Link>
              <Link to="/delete_product">Delete the Product</Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Category;
