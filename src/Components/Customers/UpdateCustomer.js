import React from "react";
import axios from "axios";
import "./Form.css";

class UpadteCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      ID: null,
      custName: null,
      contName: null,
      address: null,
      city: null,
      postCode: null,
      country: null
    };
  }
  handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "ID":
        this.setState({ ID: inputValue });
        break;
      case "custName":
        this.setState({ custName: inputValue });
        break;
      case "contName":
        this.setState({ contName: inputValue });
        break;
      case "address":
        this.setState({ address: inputValue });
        break;
      case "city":
        this.setState({ city: inputValue });
        break;
      case "postCode":
        this.setState({ postCode: inputValue });
        break;
      case "country":
        this.setState({ country: inputValue });
        break;
      default:
        console.error("Error");
        break;
    }
  }
  handleSubmit() {
    const customer = {
      customerName: this.state.custName,
      contactName: this.state.contName,
      address: this.state.address,
      city: this.state.city,
      postalCode: this.state.postCode,
      country: this.state.country
    };
    axios.patch(`http://localhost:3001/customers/${this.state.ID}`, {
      customer
    });
  }
  render() {
    return (
      <div class="form-style-6">
        <h1>Update the Customer</h1>
        <form>
          <input
            type="text"
            name="ID"
            onChange={this.handleChange.bind(this)}
            placeholder="Customer ID"
          />
          <input
            type="text"
            name="custName"
            onChange={this.handleChange.bind(this)}
            placeholder="Customer Name"
          />
          <input
            type="text"
            name="contName"
            onChange={this.handleChange.bind(this)}
            placeholder="Contact Name"
          />
          <input
            type="text"
            name="address"
            onChange={this.handleChange.bind(this)}
            placeholder="Address"
          />
          <input
            type="text"
            name="city"
            onChange={this.handleChange.bind(this)}
            placeholder="City"
          />
          <input
            type="text"
            name="postCode"
            onChange={this.handleChange.bind(this)}
            placeholder="Postal Code"
          />
          <input
            type="text"
            name="country"
            onChange={this.handleChange.bind(this)}
            placeholder="Country"
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

export default UpadteCustomer;
