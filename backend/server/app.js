const express =require('express');
const bodyparser =require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb',{useMongoClient:true});

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://localhost/airbnb-test', { useMongoClient: true });
} else {
    mongoose.connect('mongodb://localhost/airbnb', { useMongoClient: true });
    //change the name of the DB
    //mongoose.connect('mongodb://localhost/airbnb', { useMongoClient: true });
    console.log("productiond db connection")
}
//initialize application 
const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(cors());

//routes
app.use('/api/locations', require('./routes/api/locations'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/reviews', require('./routes/api/reviews'));

// app.use('/api/datePick',require('./routes/api/datePick'));

module.exports = app;