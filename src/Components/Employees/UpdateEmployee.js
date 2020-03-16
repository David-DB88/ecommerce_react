import React from "react";
import axios from "axios";
import "./Form.css";

class UpadteEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      ID: null,
      lastName: null,
      firstName: null,
      birthDay: null,
      notes: null
    };
  }
  handleChange(event) {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    switch (inputType) {
      case "ID":
        this.setState({ ID: inputValue });
        break;
      case "lastName":
        this.setState({ lastName: inputValue });
        break;
      case "firstName":
        this.setState({ firstName: inputValue });
        break;
      case "birthDay":
        this.setState({ birthDay: inputValue });
        break;
      case "notes":
        this.setState({ notes: inputValue });
        break;
      default:
        console.log("Error");
        break;
    }
  }
  handleSubmit() {
    const employee = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      birthDay: this.state.birthDay,
      notes: this.state.notes
    };
    axios.patch(`http://localhost:3001/employees/${this.state.ID}`, {
      employee
    });
  }

  render() {
    return (
      <div class="form-style-6">
        <h1>Update The Employee</h1>
        <form>
          <input
            type="text"
            name="ID"
            onChange={this.handleChange.bind(this)}
            placeholder="ID"
          />
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange.bind(this)}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange.bind(this)}
            placeholder="First Name"
          />
          <input
            type="datetime"
            name="birthDay"
            onChange={this.handleChange.bind(this)}
            placeholder="Birth Day"
          />
          <input
            type="text"
            name="notes"
            onChange={this.handleChange.bind(this)}
            placeholder="Notes"
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

export default UpadteEmployee;
