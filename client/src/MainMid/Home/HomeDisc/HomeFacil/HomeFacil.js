import React, { Component } from 'react';
import './HomeFacil.css';


export default class HomeFacil extends Component {

    render() {
        return (
            <div className="homeFacil">
            <ul>
                    <li><i className="fa fa-bed fa-1x" aria-hidden="true"></i> {this.props.data.beds} Beds</li>
                    <li><i className="fa fa-bath fa-1x" aria-hidden="true"></i> {this.props.data.bathrooms} bathrooms</li>
                    <li><i className="fa fa-users fa-1x" aria-hidden="true"></i> {this.props.data.guests} Guests</li>
                    <li><i className="fa fa-home fa-1x" aria-hidden="true"></i> {this.props.data.bedrooms} Bed Rooms</li>
                  

            </ul>






            </div>
        )
    }
}   