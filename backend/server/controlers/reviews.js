const Reviews = require('../models/reviews');
const Locations = require('../models/locations');
// const Users = require('../models/users');

/*
1. getReviews     GET/reviews
2. getReview      GET/reviews/:id
3. addReview      POST => /reviews
4. updateReview   PUT => /reviews/:id
5. deleteReview   DELETE => /reviews/:id
*/

module.exports = {
    getReviews: async (req, res) => {
        try {
            const reviews = await Reviews.find({}, '-__v').populate('location').populate('userId');
            res.status(200).json(reviews);
        } catch (error) {
            res.send(error);
        }
    },

    getReview: async (req, res) => {
        try {
            const review = await Reviews.findById({ _id: req.params.reviewId }, '-__v');
            await res.status(200).json(review);
        } catch (error) {
            res.send(error);
        }
    },

    addReview: async (req, res) => {
        if (!req.body) {
            return res.status(200).json({ message: 'User id is mandatory' });
        }
        if (!req.body.location) {
            return res.status(200).json({ message: 'Location id is mandatory' });
        }
        const newReview = new Reviews(req.body);
        try {
            const review = await newReview.save();
            const location = await Locations.findOne({ _id: req.body.location }); 
            // const user = await Users.findOne({ _id: req.body.userId }); // find the user //
            location.reviews.push(review); 
            await location.save(); 
         
            res.status(200).json({ review, message: 'Review added Successfully' });
        } catch (error) {
            throw new Error(error);
        }
     
    }
};
