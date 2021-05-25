import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GenreForm extends Component {
  state = {
    value:''
  };
  render() {

    return (
      <form onSubmit={this.handleAddGenre} className="input-group mb-3 add-genre-btn">
        <input
          type="text"
          className="form-control"
          placeholder="New Genre"
          aria-label="New Genre"
          aria-describedby="button-addon2"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          <FontAwesomeIcon icon={["fas", "folder-plus"]} />
        </button>
      </form>
    );
  }

  handleChange = e => {
    const input = e.target.value;
    this.setState({value: input});
  }

  handleAddGenre = e => {
    e.preventDefault();
    const name = this.state.value;
    if (name.trim()) this.props.onAddGenre(name);
  };
}

export default GenreForm;
