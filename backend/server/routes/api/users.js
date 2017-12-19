const express = require('express');
const userControler = require('../../controlers/users.js')
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../../passport');
const { validateBody, schemas, isAuthorized } = require('../../helpers/routehelpers.js');
const jwt = require('jsonwebtoken')
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
    .post(validateBody(schemas.authSchema), userControler.signup);

router.route('/login')
    .post(passportSignIn, userControler.login);


router.route('/secret')
    .get(passportJWT, userControler.secret);


router
    .route('/:userId')
    .post(passportJWT, isAuthorized, userControler.getUser)
    .put(() => { })
    .delete(() => { });

module.exports = router;


