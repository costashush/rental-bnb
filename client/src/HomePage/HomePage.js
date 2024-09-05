import React, { Component } from "react";
import Filter from "../HomePage/Filter/Filter.js";
import HomesGrid from "../HomePage/HomesGrid/HomesGrid.js";
import Location from "../MainMid/Home/Location/Location.js";
import "./HomePage.css";


class HomePage extends Component {
  constructor() {
    super();
    this.state = { homeData: null };
  }
  componentDidMount() {
    this.fetchData().then((homeData) => this.setState({ homeData }));
  }
  async fetchData() {
    let data = await fetch("http://localhost:9000/api/locations", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((json) => {
        return json;
      });
      console.log("locations data  =============>",data)
    return data;
  }
  render() {
    console.log("locations data ", this.state.homeData)

    return (
      <div>
        {this.state.homeData && (
          <div className="homePage">
            <Filter />
            <HomesGrid data={this.state.homeData} />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
