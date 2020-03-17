import React from "react";
import axios from "axios";
import p from "./Table.module.css";

class FindTheProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      id: ""
    };
  }

  handleChange(event) {
    const id = event.target.value;
    this.setState({ id });
  }

  handleClick() {
    axios.get(`http://localhost:3001/products/${this.state.id}`).then(res => {
      const product = res.data;
      this.setState({ product });
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "530px" }}>
          <div>Enter Product ID</div>
          <div>
            <input
              type="text"
              onChange={this.handleChange.bind(this)}
              id="id"
            />
          </div>
          <button onClick={this.handleClick.bind(this)}>Get The Product</button>
        </div>
        <table className={p.products}>
          <tr>
            <th>Product Name</th>
            <th>Product Unit</th>
            <th>Product Price</th>
          </tr>
          <tr>
            <td>{this.state.product.productName}</td>
            <td>{this.state.product.unit}</td>
            <td>{this.state.product.price}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FindTheProducts;
