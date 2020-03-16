import React from "react";
import axios from "axios";
import e from "./Table.module.css";

class AllEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/employees").then(res => {
      const employees = res.data;
      this.setState({ employees });
    });
  }

  render() {
    return (
      <table className={e.employees}>
        <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Birth Day</th>
        </tr>
        {this.state.employees.map(item => (
          <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.birthDay}</td>
          </tr>
        ))}
      </table>
    );
  }
}
export default AllEmployees;
