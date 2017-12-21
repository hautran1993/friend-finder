//dependencies
const path = require("path");
const friends = require("../data/friends");

//creating apiRoutes
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
  //when using get your getting a response from servers(dataware houses)
  //in your case friends.js<---could be firebase, mysql, other databses
    res.json(friends);
    var friendFinder = []
    //push all matched friends into here
    //for var i = 0 ; i<data.length; i++{
    //
  });

  app.post("/api/friends", function(req, res) {
    //post is sending information from the html/client to servers(database)
    //in the request, post meaning you requested/created/something from the client.
    //do math part in post
    //run a loop through and compare request and response
    //display in modal in servey.html
    // console.log(req.body);

  });
//clear the friendlist table, not sure why it needs to be here though
  app.post("/api/clear",function(res, req){
    friendList= [];
    console.log(friendList);
  });
}
