import React, { Component } from "react";

class SearchBar extends Component {
  state = { data: { input: "" } };

  handleSearch = (e) => {
    const { input } = this.state.data;
    e.preventDefault();
    this.props.handleSearch(input);
  };

  handleChange = e => {
      this.setState({data: {input: e.target.value}});
  }

  render() {
    const { placeholder } = this.props;

    return (
      <form onSubmit={this.handleSearch} className="input-group mb-3">
        <input onChange={this.handleChange} type="text" className="form-control" placeholder={placeholder} />
        <button
          className="btn btn-outline-secondary"
          type="sumbit"
          id="button-addon2"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
