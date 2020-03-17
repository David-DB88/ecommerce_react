import React from "react";
import axios from "axios";

class DeleteProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
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
    this.setState({ err: "" });

    axios
      .delete(`http://localhost:3001/products/${this.state.ID}`)
      .then(response => {
        // console.log(response);
        console.log(response);
        if (response.status === 204) {
          this.setState({ err: "Product Was Deleted" });
        } else {
          this.setState({ err: "Product Was Not Deleted" });
        }
      })
      .catch(this.setState({ err: "Product Was Not Deleted" }));
  }
  render() {
    return (
      <div>
        <div class="form-style-6">
          <h1>Choose the Product</h1>
          <form>
            <input
              type="text"
              name="ID"
              onChange={this.handleChange.bind(this)}
              placeholder="Product ID"
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

export default DeleteProduct;
