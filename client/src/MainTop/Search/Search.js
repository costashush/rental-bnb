/*global google*/

import React, { Component } from "react";
import "./Search.css";

export default class Serch extends Component {
  constructor(google, places) {
    super();

    this.state = { autocomplete: "" };
  }
  googleSearch(e) {
    let input = document.getElementById("pac-input");
    let searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  }
  render() {
    return (
      <div className="search">
        <input
          id="pac-input"
          placeholder="search"
          type="text"
          name="search"
          onChange={(e) => this.googleSearch(e)}
        />
      </div>
    );
  }
}
