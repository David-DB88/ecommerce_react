import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div>
        <ul>
          {this.state.categori.map((categor, index) => (
            <Link key={index} index={categor.id} to={`/category_product/${categor.id}`}>
              <li>{categor.categoryName}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
