import React, { Component } from "react";
import axios from "axios";

class CatigorProd extends Component {
  state = {
    product: []
  };

  componentDidMount() {
    axios.post(`http://localhost:3001/CategoryProd`,{categoryId: this.props.match.params.index})
    .then(res => {
      const product = res.data;
      console.log(product)
      this.setState({ product });
    });
  }

  render() {
    return (
      <div>
          {this.state.product.map((product, index) => (   
            <div key={index}>         
              <h2>Product Name: {product.productName}</h2>
              <h3>Unit: {product.unit}</h3>
              <h3>Price: {product.price}</h3>
              </div>
          ))}
      </div>
    );
  }
}


export default CatigorProd;
