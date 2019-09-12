/* This is to serve index.html with few ajax call to pull data from server (Express router exercise)
 * Author: HartCode programmer
 */
"use strict";

$(function() {

    $("#leaguesBtn").on("click", function() {
        let leagues = 'leagues';
        getData(leagues);
    })

    $("#teamsBtn").on("click", function() {
        let teams = 'teams';
        getData(teams);
    })

});
// Get leagues
function getData(path) {
    $.getJSON(`http://localhost:3000/${path}`, function() {})
        .done(function(data) {
            // let parsedData = JSON.parse(data);
            console.log(data);

            $("#contentDiv").empty();
            $("#contentDiv")
                .append($("<div/>")
                    // .attr("class", "col-md-5")
                    .attr("id", "leagueListDiv")
                    .append($("<h3/>")
                        .attr("class", "font-weight-bold font-italic")
                        .html("List of Leagues"))
                    .append($("<ul/>")
                        .attr("id", "leagueListUl")
                        .attr("class", "list-unstyled list-inline"))
                )
                //Run through league and populate the dropdown
            $.each(data, function(key, value) {
                $("#leagueListUl").append($("<li/>")
                    .attr("class", "list-inline-item")
                    .append($("<a/>")
                        .attr("href", "#")
                        .attr("class", "non-underline-link")
                        .append($("<br/>"))
                        .append($("<span/>")
                            .attr("class", "text-secondary text-center")
                            .text(value.Name))
                        .on("click", function(e) {
                            // prevent all default action and do as we direct
                            e.preventDefault();
                            showLeagues();
                            getleagueSection(value.Code);
                            // Remove the fixed bottom class, as data is loaded and it needs to be responsive now
                            $("#footerDiv").removeClass("fixed-bottom");
                        })));
            });

        })
        .fail(function() {
            console.log("error");
        })
}