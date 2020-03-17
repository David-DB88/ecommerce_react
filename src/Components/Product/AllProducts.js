import React from "react";
import axios from "axios";
import e from "./Table.module.css";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/products").then(res => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <table className={e.products}>
        <tr>
          <th>Product Name</th>
          <th>Products Unit</th>
          <th>Products Price</th>
        </tr>
        {this.state.products.map(item => (
          <tr>
            <td>{item.productName}</td>
            <td>{item.unit}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    );
  }
}
export default AllProducts;
