import React, { Component } from "react";
import axios from "axios";
import s from "./Categories.module.css";
import icon from "./404.png";
import pizza from "./Pizza.jpg";

class CatigorProd extends Component {
  state = {
    product: [],
    notFound: ""
  };

  componentDidMount() {
    axios
      .post(`http://localhost:3001/CategoryProd`, {
        categoryId: this.props.match.params.index
      })
      .then(res => {
        const product = res.data;
        if (product.length === 0) {
          this.setState({ notFound: <img src={icon} alt="Icon404" /> });
        } else {
          this.setState({ product });
        }
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100%"
        }}
      >
        {this.state.product.map((product, index) => (
          <div key={index} className={s.card}>
            <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
              Product Card
            </h2>
            <img src={pizza} alt="Pizza" style={{ width: "70%" }} />
            <h1>{product.productName}</h1>
            <p>Price: {product.price}</p>
            <h3>Unit: {product.unit}</h3>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
        {<div className={s.img}>{this.state.notFound}</div>}
      </div>
    );
  }
}

export default CatigorProd;
