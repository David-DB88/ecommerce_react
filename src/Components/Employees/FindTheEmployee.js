import React from "react";
import axios from "axios";
import e from "./Table.module.css";

class FindTheEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      id: ""
    };
  }

  handleChange(event) {
    const id = event.target.value;
    this.setState({ id });
  }

  handleClick() {
    axios.get(`http://localhost:3001/employees/${this.state.id}`).then(res => {
      const employee = res.data;
      this.setState({ employee });
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "530px" }}>
          <div>Enter Employee ID</div>
          <div>
            <input
              type="text"
              onChange={this.handleChange.bind(this)}
              id="id"
            />
          </div>
          <button onClick={this.handleClick.bind(this)}>
            Get The Employee
          </button>
        </div>
        <table className={e.employees}>
          <tr>
            <th>Employee Last Name</th>
            <th>Employee First Name</th>
            <th>Employee Birth Day</th>
          </tr>
          <tr>
            <td>{this.state.employee.lastName}</td>
            <td>{this.state.employee.firstName}</td>
            <td>{this.state.employee.birthDay}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FindTheEmployee;
