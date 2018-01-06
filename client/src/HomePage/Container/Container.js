import React, { Component } from 'react';
import Rating from '../../MainMid/Home/Reviews/Rating/Rating'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Container.css';

export default class Container extends Component {

    render() {
        let reviews = this.props.data.reviews
        let reviewsLen =this.props.data.reviews.length
<<<<<<< HEAD
        let reviewsAvg = reviews.reduce((sum,review)=> {return sum + review.rating },0) / reviewsLen

        
    
=======
        let reviewsAvg = reviews.reduce((sum,review)=> {return sum + review.rating },0) / reviewsLen    
>>>>>>> 6dd70f9eb3d93118add5010e2bd1b20090679f0c
        return (
            <Link to={'home/'+ this.props.data['_id']}>
            <div className="imageContainer">
            <div className='previewImage'>
            <img src={this.props.data.imageUrl}/>
            </div>
            <div className="previewTitle"><h3>{this.props.data.title}</h3> </div>
            <div className= "previewBed">{this.props.data.type} </div>
            <div className = "previewPrice">{this.props.data.price} &#8362;</div>
            <Rating rate={reviewsAvg} />
            </div>
            
           </Link>
        )
    }
}   