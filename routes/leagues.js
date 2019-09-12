/*
 * This is node server js to support the router for leagues 
 *
 */
const express = require('express');
const leaguesRouter = express.Router();
const fs = require('fs');

leaguesRouter.get('/', function(request, response) {
    // set Content-Type for JSON
    response.setHeader('Content-Type', 'application/json');
    response.end(fs.readFileSync('./data/leagues.json'));
});
module.exports = leaguesRouter;