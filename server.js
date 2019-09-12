/*
 * This is node server js to build http server through Express generator using routes and handle bar 
 * / -> /public/index
 * /leagues -> /data/leagues.json
 * /teams -> /data/teams.json
 * Author: HartCode programmer
 */

// Node built in modules
const http = require('http');
const fs = require("fs");

const express = require('express');
const hbs = require('hbs'); //template engine

//include routes
const leagues = require('./routes/leagues');
const teams = require('./routes/teams');

var app = express();

//register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
//set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', function() {
    return new Date().getFullYear();
})

// Middleware
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
// app.unsubscribe(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/leagues', leagues);
app.use('/teams', teams);

app.get('/index', function(request, response) {
    response.render('index.hbs', { pageTitle: 'CricketLeagues' });
})

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    response.status(404).redirect('/404.html');
});

// Handle 500 response
app.use((request, response, next) => {
    response.status(500).redirect('/error.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', function() {
    console.log(`Server listening on ${server.address().port}`);
})