import React from "react";
import axios from "axios";
import "./Form.css";

class UpadteProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      id: null,
      productName: null,
      unit: null,
      price: null,
      supplier_id: null
    };
  }
  handleChange(event) {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    switch (inputType) {
      case "id":
        this.setState({ id: inputValue });
        break;
      case "productName":
        this.setState({ productName: inputValue });
        break;
      case "unit":
        this.setState({ unit: inputValue });
        break;
      case "price":
        this.setState({ price: inputValue });
        break;
      case "supplier_id":
        this.setState({ supplier_id: inputValue });
        break;
      default:
        console.log("Error");
        break;
    }
  }
  handleSubmit() {
    const product = {
      productName: this.state.productName,
      unit: this.state.unit,
      price: this.state.price,
      supplier_id: this.state.supplier_id
    };
    axios.patch(`http://localhost:3001/products/${this.state.id}`, {
      product
    });
  }

  render() {
    return (
      <div class="form-style-6">
        <h1>Update a New Product</h1>
        <form>
          <input
            type="text"
            name="id"
            onChange={this.handleChange.bind(this)}
            placeholder="Product id"
          />
          <input
            type="text"
            name="productName"
            onChange={this.handleChange.bind(this)}
            placeholder="Product Name"
          />
          <input
            type="text"
            name="unit"
            onChange={this.handleChange.bind(this)}
            placeholder="Product unit"
          />
          <input
            type="text"
            name="price"
            onChange={this.handleChange.bind(this)}
            placeholder="Product price"
          />
          <input
            type="text"
            name="supplier_id"
            onChange={this.handleChange.bind(this)}
            placeholder="Enter supplier ID between numbers 1 to 20"
          />
          <input
            type="submit"
            onClick={this.handleSubmit.bind(this)}
            value="Send"
          />
        </form>
      </div>
    );
  }
}

export default UpadteProduct;
