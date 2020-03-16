import React from "react";
import axios from "axios";
import t from "./Table.module.css";

class AllCustomers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/customers").then(res => {
      const customers = res.data;
      this.setState({ customers });
    });
  }

  render() {
    return (
      <table className={t.customers}>
        <tr>
          <th>Customer Name</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        {this.state.customers.map(item => (
          <tr>
            <td>{item.customerName}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </table>
    );
  }
}
export default AllCustomers;
