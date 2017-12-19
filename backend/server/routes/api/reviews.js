const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

const ReviewsController = require('../../controlers/reviews');

router
    .route('/')
    .get(ReviewsController.getReviews)
    .post(passportJWT,ReviewsController.addReview)
    .put(() => {})
    .delete(() => {});

router
    .route('/:reviewId')
    .get(passportJWT,ReviewsController.getReview)
    .post(() => {})
    .put(() => {})
    .delete(() => {});

module.exports = router;
