import React, { Component } from 'react';
import MidNav from '../Home/MidNav/MidNav.js';
import HomeDisc from '../Home/HomeDisc/HomeDisc.js';
import Location from '../Home/Location/Location.js';
import ReviewForm from '../Home/Reviews/ReviewForm/ReviewForm.js';
import ReviewList from '../Home/Reviews/ReviewList/ReviewList.js';
import MainImage from '../../MainTop/MainImage/MainImage.js';
import DateCheak from '../../MainMid/DateCheak/DateCheak.js';

// import homeData from '../../homeData.json.js';

import './Home.css';

export default class Home extends Component {
    constructor({ match }) {
        super()
        this.state = { reviewData: [], homeData:null, id:match.params.id };
        this.handleOnClick = this.handleOnClick.bind(this);         
    }

  
    componentDidMount() {
        this.fetchData().then(homeData => this.setState({ homeData }))
        console.log(this.state.homeData)
      }
    
      async fetchData() {
        let data = await fetch('http://localhost:9000/api/locations/'+this.state.id, { method: 'GET' })
          .then(response => response.json())
          .then((json) => { return json })
        return data
     
      }
    
    handleOnClick() {
        // this.state.reviewData.push(data);
        // this.setState({ reviewData: this.state.reviewData });
        this.setState();
        this.componentDidMount();
    }
    
    render() {
        return (
            <div>
                {this.state.homeData && <div className="home">
                    <MainImage data={this.state.homeData.imageUrl} />
                    <DateCheak data={this.state.homeData.price} />
                    <MidNav />
                    <HomeDisc data={this.state.homeData} />
                    <ReviewList reviews={this.state.homeData.reviews} />
                    <ReviewForm id= {this.state.id} handleOnClick={this.handleOnClick}/>
                    <Location data={this.state.homeData.address[0]} />
                </div>}
            </div>
            
        )
    }
}
