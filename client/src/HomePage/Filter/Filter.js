import React, { Component } from 'react';
import './Filter.css';


export default class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <ul>
                    <li>Room type</li>
                    <li>Price Range</li>
                    <li>Locations</li>
                </ul>
            </div>
        )
    }
}   