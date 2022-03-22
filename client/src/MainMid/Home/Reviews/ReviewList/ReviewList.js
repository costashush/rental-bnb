import React, { Component } from "react";
import Review from "../Review/Review";
import "./ReviewList.css";

export default class ReviewList extends Component {
  render() {
    let reviews = this.props.reviews.map((review, index) => (
      <Review key={index} review={review} />
    ));
    return (
      <div className="reviewList">
        <h1>Review List</h1>
        <div>{reviews}</div>
      </div>
    );
  }
}
