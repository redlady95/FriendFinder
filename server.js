
var express = require("express"); 
var bodyParser = require("body-parser"); 
 
//Express configuration. 

 
// Tells node that we are creating an "express" server 
var app = express(); 

 
// Sets an initial port. We"ll use this later in our listener 
var PORT = process.env.PORT || 3307; 

 
// Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

 
//Allows access to all the files in the public folder. 
//This avoids error when files inside /app/public/js are called. 
app.use(express.static("app/public"));
 
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app); 

 
//Listener 
app.listen(PORT, function() { 
console.log("App listening on PORT: " + PORT); 
}); 
