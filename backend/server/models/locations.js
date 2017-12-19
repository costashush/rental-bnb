const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    imageUrl: {
        type: String
    },
    title: String,
    price: Number,
    currency: String,
    theSpace: {
        beds: Number
    },
    reviews: [
        {
        
        }
    ],
    address: [
        {
            city: String,
            country: String
        }
    ]
});

const location = mongoose.model('location', LocationsSchema);

module.exports = location;
