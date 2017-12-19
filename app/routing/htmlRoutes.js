//has to create the correct path to link to the html file
var path = require("path");
//=======================================

module.exports = function(app) {
  //html get requests
  //below code handles different pathways for each page
  //in each of the below cases the user is shown an html content.
  app.get("/tables", function(req, res){
      res.sendFile(path.join(_dirname,"../public/tables.html"));
  });
  //each app.get is to send to another path
  app.get("/tables", function(req, res) {
      res.sendFile(path.join(_dirname,"../public/tables.html"));
  });
  //different path
  app.get("/tables", function(req, res) {
      res.sendFile(path.join(_dirname, "../public/tables.html"));
  });
};
