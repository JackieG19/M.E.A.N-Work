// Assignmetn Express Level 2

var express = require("express");
var app = express();

app.get("/cities", function(request, response){
  var blocks = ['Providence', 'Cranston', 'Warwick', 'Pawtucket', 'Johnston'];
  
  if (request.query.limit >= 0){
        response.json(blocks.slice(0, request.query.limit));
    } else{
    response.json(blocks);
    }
  // Create a /cities route in your app.js file with at least 4 cities.
  //var blocks = '<ul><li>Providence</li><li>Cranston</li><li>Pawtucket</li><li>Warwick</li></ul>';
  //response.sendFile(__dirname + "/public/index.html");
  // Create an index route that refers to the following file requirement.
}); 

app.use(express.static('public'));

app.listen(process.env.PORT, function(){
  console.log('listening to PORT');
});