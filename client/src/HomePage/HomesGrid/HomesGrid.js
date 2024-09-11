import React, { Component } from "react";
import Container from "../Container/Container.js";

import "./HomesGrid.css";

export default class HomesGrid extends Component {
  render() {
    let homes;
    console.log('props home grid', this.props.data)
    if(this.props.data ){
       homes = this.props.data.map((data, index) => (
        <Container key={index} data={data} />
      ));
    }else{
       homes = this.props.data.default.map((data, index) => (
        <Container key={index} data={data} />
      ));
    }

   
    return <div className="homesGrid">{homes}</div>;
  }
}
