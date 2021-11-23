const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/webdev');


// add CORS so that servers will allow requests
// form origins we know we can trust
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



console.log("Connected to Server Successfully!");

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

// movies from server side
require('./services/movies-service')(app);

// tweets from server side
require('./services/tweets-service')(app);

// profile from server side
require('./services/profile-service')(app);



// movies from Mongodb database
require('./db/movies/movie-service')(app);

// tweets from mongodb database
require('./db/tweets/tweeter-service')(app);

// who from mongodb database
require("./db/who/who-service")(app);

// profile form mongodb database
require("./db/profile/profile-service")(app);

app.listen(process.env.PORT || 4000);
