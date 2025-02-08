const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    title: String,
    type: String,
    generalDesc: String,
    guestAccess :String,
    others: String,
    price: Number,
    currency: String,
    amenities: [
        String
    ],
    owner: {
        imageUrl: String,
        name: String
    },
    imageUrl: String,
    
    address: 
        {
            country: String,
            city: String,
            street:String,
            number:String,
            lat:String,
            lng:String

        },    
    theSpace: 
        {
            description: String,
            guests :String,
            beds: String,
            bedrooms: String
        },
    reviews:[
        {
            title:String,
            name: String,
            content: String,
            userImageUrl: String,
            rating: Number,
            date: Date
        }
    ],
    occupancy :[
        String
    ]    
    
});

// const location = 

module.exports = mongoose.model('location', LocationsSchema);
