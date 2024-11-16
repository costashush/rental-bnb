const express =require('express');
const bodyparser =require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/airbnb',{useMongoClient:true});

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://localhost:27017/app-test', {  useNewUrlParser: true  });
} else {
    var Admin = mongoose.mongo.Admin;
    var connection = mongoose.connect('mongodb://localhost:27017/app',{  useNewUrlParser: true  });
        console.log(`Mongo db connected: ${mongoose.connection.readyState}`);
  
        // connection.on('open', function() {
        //     // connection established
        //     new Admin(connection.db).listDatabases(function(err, result) {
        //         console.log('listDatabases succeeded');
        //         // database list stored in result.databases
        //         var allDatabases = result;    
        //         console.log(`Mongo db connected: ${mongoose.connection.readyState}`);
        //         console.log(`Mongo db allDatabases: ${allDatabases}`);
        //     });
        // });
    //change the name of the DB
    //mongoose.connect('mongodb://localhost/airbnb', { useMongoClient: true });
    // ready states being:

    // 0: disconnected
    // 1: connected
    // 2: connecting
    // 3: disconnecting
    console.log("production db connection")
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