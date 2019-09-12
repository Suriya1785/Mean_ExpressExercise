/*
 * This is node server js to support the router for teams 
 *
 */
const express = require('express');
const teamsRouter = express.Router();
const fs = require('fs');

teamsRouter.get('/', function(request, response) {
    // set Content-Type for JSON
    response.setHeader('Content-Type', 'application/json');
    response.end(fs.readFileSync('./data/teams.json'));
});
module.exports = teamsRouter;