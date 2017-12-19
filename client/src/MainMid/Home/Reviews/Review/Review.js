import React, { Component } from 'react';
import Rating from '../Rating/Rating.js'
import './Review.css';


export default class Review extends Component {
    render() {
        return (
            <div className="review">
                <div className="user">
                    <img src={this.props.review.userImageUrl} />
                    <h5 >{this.props.review.name}</h5>
                </div>

                <h4>{this.props.review.title}</h4>
                <h5> {this.props.review.date} </h5>

                <p>{this.props.review.content}</p>
                <Rating rate={this.props.review.rating} />
                

            </div>
        )
    }
}