import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import s from "./Categories.module.css";

export default class Categories extends React.Component {
  state = {
    categori: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/categories`).then(res => {
      const categori = res.data;
      console.log(categori);
      this.setState({ categori });
    });
  }

  render() {
    return (
      <div  style={{height: '400px'}}>
        <ul  style={{}}>
          {this.state.categori.map((categor, index) => (
            <Link style={{textDecoration: 'none', height: '400px'}} key={index} index={categor.id} to={`/categories-product/${categor.id}`}>
              <p className={s.accordion}>{categor.categoryName}</p>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
