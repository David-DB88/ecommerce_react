import React from "react";
import axios from "axios";

class DeleteEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      ID: null,
      err: ""
    };
  }
  handleChange(event) {
    const ID = event.target.value;
    this.setState({ ID });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .delete(`http://localhost:3001/employees/${this.state.ID}`)
      .then(response => {
        // console.log(response);
        console.log(response);
        if (response.status === 204) {
          this.setState({ err: "Employee Was Deleted" });
        } else {
          this.setState({ err: "Employee Was Not Deleted" });
        }
      })
      .catch(this.setState({ err: "Employee Was Not Deleted" }));
  }
  render() {
    console.log("ggggggg", this.state.err);
    return (
      <div>
        <div class="form-style-6">
          <h1>Choose the Employee</h1>
          <form>
            <input
              type="text"
              name="ID"
              onChange={this.handleChange.bind(this)}
              placeholder="Employee ID"
            />
            <input
              type="submit"
              onClick={this.handleSubmit.bind(this)}
              value="Send"
            />
          </form>
        </div>
        <div>
          <h1 style={{ marginLeft: "595px" }}>{this.state.err}</h1>
        </div>
      </div>
    );
  }
}

export default DeleteEmployee;
