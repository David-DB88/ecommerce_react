import React from "react";
import axios from "axios";
import t from "./Table.module.css";

class FindTheCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      id: ""
    };
  }

  handleChange(event) {
    const id = event.target.value;
    this.setState({ id });
  }

  handleClick() {
    axios.get(`http://localhost:3001/customers/${this.state.id}`).then(res => {
      const customer = res.data;
      this.setState({ customer });
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "530px" }}>
          <div>Enter Customer ID</div>
          <div>
            <input
              type="text"
              onChange={this.handleChange.bind(this)}
              id="id"
            />
          </div>
          <button onClick={this.handleClick.bind(this)}>
            Get The Customer
          </button>
        </div>
        <table className={t.customers}>
          <tr>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Customer City</th>
          </tr>

          <tr>
            <td>{this.state.customer.customerName}</td>
            <td>{this.state.customer.address}</td>
            <td>{this.state.customer.city}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FindTheCustomer;
