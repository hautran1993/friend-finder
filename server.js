//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up Express

var app = express();
var PORT = process.env.PORT || 3030;

//set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log("Server listening on port: " + PORT);
});
