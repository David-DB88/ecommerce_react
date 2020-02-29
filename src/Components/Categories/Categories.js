import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Categories extends React.Component {
  state = {
    categori: [],
    key: ""
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const categori = res.data;
      this.setState({ categori });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.categori.map((categor, index) => (
            <Link to="/product/catigorProd">
              <li key={index}>{categor.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
