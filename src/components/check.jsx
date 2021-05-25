import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/common.css";

class Check extends Component {
  state = {};
  render() {
    let iconName = !this.props.checked ? "circle" : "check-circle";

    return (
      <FontAwesomeIcon
        icon={["far", iconName]}
        onClick={() => this.props.onClick(this.props.task)}
      />
    );
  }
}

export default Check;
