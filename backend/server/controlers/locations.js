const Locations = require('../models/locations');
const locations_test = require('./homeData.json.js');
const mongoose = require('mongoose');

/*
1. getLocations     GET/locations
2. getLocation      GET/locations/:id
3. addLocation      POST => /locations
4. updateLocation   PUT => /locations/:id
5. deleteLocation   DELETE => /locations/:id
*/

module.exports = {
    getLocations: async (req, res) => {
      
        try {
            const locations = await Locations.find({}, '-__v');
            //set up demo json for testing
            if(locations.length == 0){
                
                try {
                    locations_test.forEach(element => {
                        const test_location =  new Locations(element)                   
                        test_location.save();
                        
                    });
                } catch (error) {
                    console.log|("DB locations collection start up error" + error);
                }                      
                
            }
            // console.log(`Mongo db: ${locations}`);         
            res.status(200).json(locations);
            // res.status(200).json(locations_test);
        } catch (error) {
            res.send(error);

        }
    },
    addLocation: async (req, res) => {
      
        const newLocation = new Locations(req.body);
        try {
            const location = await newLocation.save();
            res.status(200).json({ location, message: 'Updated successfully' });
        } catch (error) {
            res.send(error);
        }
    },
    getLocation: async (req, res) => {
        try {
            console.log(req.params.locationId)
            const location = await Locations.findById({ _id: req.params.locationId }, '-__v');
            await res.  status(200).json(location);
            // console.log(`test`+locations_test)
            // await res.status(200).json(locations_test[req.params.locationId]);
        } catch (error) {
            res.send(error);
        }
    },
};
