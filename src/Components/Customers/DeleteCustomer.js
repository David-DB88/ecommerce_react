import React from "react";
import axios from "axios";

class DeleteCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
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
      .delete(`http://localhost:3001/customers/${this.state.ID}`)
      .then(response => {
        // console.log(response);
        console.log(response);
        if (response.status === 204) {
          this.setState({ err: "Customer Was Deleted" });
        } else {
          this.setState({ err: "Customer Was Not Deleted" });
        }
      })
      .catch(this.setState({ err: "Customer Was Not Deleted" }));
  }
  render() {
    console.log("ggggggg", this.state.err);
    return (
      <div>
        <div class="form-style-6">
          <h1>Choose the Customer</h1>
          <form>
            <input
              type="text"
              name="ID"
              onChange={this.handleChange.bind(this)}
              placeholder="Customer ID"
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

export default DeleteCustomer;
