//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//set up Express
var app = express();
var PORT = process.env.PORT || 3000;

//set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//listener
app.listen(PORT, function(){
  console.log("Server listening on port: " + PORT);
});
