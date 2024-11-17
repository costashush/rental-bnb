const express =require('express');
const bodyparser =require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
process.env.NODE_ENV = 'test';


mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'test') {
        mongoose.connect('mongodb://localhost:27017/app-test', {  useNewUrlParser: true  });
        console.log("test db connection");
        console.log(`Mongo db connected: ${mongoose.connection.readyState}`);


} else {
        mongoose.connect('mongodb://localhost:27017/app',{  useNewUrlParser: true  });
        console.log(`Mongo db connected: ${mongoose.connection.readyState}`);
        console.log("production db connection")
}
console.log(`
    DB connection ready states being:
    0: disconnected
    1: connected
    2: connecting
    3: disconnecting`
)
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