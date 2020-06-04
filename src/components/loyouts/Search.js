import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
    error: false,
  };
  onchange = (text) => {
    this.setState({ text: text.target.value });
  };
  onsubmit = (e) => {
    e.preventDefault();
    this.state.text === ""
      ? this.props.seterror("please enter name", "light")
      : this.props.searchitems(this.state.text) && this.props.unseterror();
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.onsubmit}>
          <input
            type="text"
            className=""
            name="text"
            placeholder="Enter Username...."
            onChange={this.onchange}
            value={this.state.text}
          ></input>
          <input
            type="submit"
            className="btn btn-block btn-dark"
            value="Search"
            name="search"
          ></input>
        </form>
        {this.props.showclear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearuser}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
