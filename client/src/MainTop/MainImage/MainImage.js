import React, { Component } from "react";
import "./MainImage.css";

export default class MainImage extends Component {
  render() {
    return (
      <div className="imgDiv">
        <img src={this.props.data} />
      </div>
    );
  }
}
