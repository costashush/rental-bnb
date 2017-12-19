import React, { Component } from 'react';
import HomeFacil from './HomeFacil/HomeFacil.js';

import './HomeDisc.css';

export default class HomeDisc extends Component {
      
    render() {
        
        return (
            <div className="homeDisc">
            <div className = "owner">
                <img src={this.props.data.owner.imageUrl}/>
                <h5 >{this.props.data.owner.name}</h5>
            </div>
            <h1 >{this.props.data.title}</h1> 
            <h3 >{this.props.data.type}</h3>
            <h4 >{this.props.data.theSpace.description}</h4> 
            <HomeFacil data={this.props.data.theSpace} />
            
            <p>{this.props.data.generalDesc}</p>
            <hr></hr>
            <p>{this.props.data.guestAccess}</p>
        </div>
        )
    }

}
