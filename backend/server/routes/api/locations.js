const express = require('express');
const locationControler = require('../../controlers/locations.js')
const router = express.Router();

router.route('/').get(locationControler.getLocations).post(locationControler.addLocation).put(() => {}).delete(() => {});

router.route('/:locationId').get(locationControler.getLocation).post(() => {}).put(() => {}).delete(() => {});



module.exports = router;