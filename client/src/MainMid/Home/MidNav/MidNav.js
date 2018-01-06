import React, { Component } from 'react';
import './MidNav.css';

export default class MidNav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><a href="">Overview</a></li>
                    <li><a href="#services">Reviews</a></li>
                    <li><a href="#contact">The Host</a></li>
                    <li><a href="#services">Location</a></li>
                </ul>
            </div>
        )
    }
}




