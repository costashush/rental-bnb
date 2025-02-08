const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: String,
    content: String,
    rating: Number,
    date: String,
    name: String,
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'location',
        required: true
    }
});


module.exports =  mongoose.model('review', ReviewSchema);
