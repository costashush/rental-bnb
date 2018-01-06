import React, { Component } from 'react';
import Container from '../Container/Container.js'

import './HomesGrid.css';


export default class HomesGrid extends Component {

    render() {   
        let homes = this.props.data.map((data,index)=> <Container key={index} data={data} />)
        return (
            <div className="homesGrid">
                {homes}
            </div>
        )
    }
}   





