import React, { Component } from 'react';
import moment from 'moment';
import './ReviewForm.css'
import axios from 'axios';

export default class ReviewForm extends Component {
    constructor({ match }) {
        super()

        this.state = {
       
        };
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    sendReview() {
        let apiBaseUrl = 'http://localhost:9000/api/reviews/';
        let head = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            }
        }
        let payload = {
            location: this.props.id,
            name: localStorage.getItem('name'),
            title: this.state.title,
            content: this.state.content,
            rating: this.state.rating
        };
        console.log(head.headers.authorization)
        if (payload.name && head.headers['authorization']) {


            axios

                .post(apiBaseUrl, payload, head)
                .then(response => {
                    console.log(response)
                    if (response.status == 200) {
                        this.props.handleOnClick()
                        alert('new review added !');
                    }
                })
                .catch(function (error) {
                    alert('username password do not match');
                    console.log(error);
                });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ date: moment(new Date()).format("DD/MM/YYYY") })
    }
    handleAddClick() {
        const { title, content, rating } = this.state
        if (title && content && rating) {

            this.sendReview()
            this.setState({
                title: "",
                content: "",
                rating: "",
                date: ""
            })
        }
        else {
            alert("some fields are empty")
        }
    }
    render() {

        return (

            <div className="reviewForm">
                <h1>Place your review</h1>
                title:  <input type="text" name="title" onChange={(e) => this.handleChange(e)} />
                content:  <input type="text" name="content" onChange={(e) => this.handleChange(e)} />
                {/* user image: <input type="text" name="userImageUrl" onChange={(e) => this.handleChange(e)} /> */}
                rate:    <input type="number" name="rating" onChange={(e) => this.handleChange(e)} />
                <button onClick={this.handleAddClick}>Add</button>
            </div>

        )
    }
}