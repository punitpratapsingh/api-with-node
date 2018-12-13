//dependencies
const express = require('express');
const mongoose =require('mongoose');
const bodyParser= require('body-parser');
const routes = require('./routes/user');

//mongodb
mongoose.connect('mongodb://localhost/nodeapi',{useNewUrlParser: true});

//express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
routes(app);

// start server
app.listen(3000);
console.log('api is running on port 3000');