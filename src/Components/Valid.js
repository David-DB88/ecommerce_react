import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    login: "name",
    password: "password",
    errorForm: "",
    count: 0,
    error: "",
    err: ""
  };

  validate = () => {
    let errorForm = "";
    let err = "";
    if (
      this.state.login === "name" ||
      this.state.login.length > 10 ||
      !this.state.login.match(/[1-9]/g)
    ) {
      errorForm = "You have a some ERROR";
    } else if (this.state.count === 3) {
      err = "Cannot log in at this time. Contact the System Administrator";
    }

    if (errorForm) {
      this.setState({ errorForm });
      return false;
    } else if (err) {
      this.setState({ err });
      return false;
    }
    return true;
  };

  handleChange = event => {
    console.log("event:", event);
    console.log("event.target.name:", event.target.name);
    console.log("event.target.value:", event.target.value);
    console.log(this.state.count);

    this.setState({
      errorForm: this.state.error,
      [event.target.name]: event.target.value
    });
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  hanleSubmit = event => {
    event.preventDefault();
    const valid = this.validate();
    if (valid) {
      console.log(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.hanleSubmit.bind(this)}>
        <h1>{this.state.errorForm}</h1>
        <h1>{this.state.err}</h1>
        <div>
          <input
            type="text"
            name="login"
            placeholder="Enter your Login"
            // pattern="^[ 0-9]+$"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <button
            type="submit"
            // value={"submit"}
            onClick={this.incrementCount.bind(this)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
