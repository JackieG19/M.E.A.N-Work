// Assignmetn Express Level 2

var express = require("express");
var app = express();

var blocks = {
  'Providence': 'Rhode Island', 
  'Cranston': 'Rhode Island', 
  'Warwick': 'Warwick', 
  'Pawtucket': 'Rhode Island', 
  'Johnston': 'Rhode Island'};

app.get("/cities/:states", function(request, response){
  //var blocks = ['Providence', 'Cranston', 'Warwick', 'Pawtucket', 'Johnston'];
  var description = blocks[request.params.name];
  response.json(description);
  
  if (request.query.limit >= 0){
        response.json(blocks.slice(0, request.query.limit));
    } else{
    response.json(blocks);
    }
}); 

app.use(express.static('public'));

app.listen(process.env.PORT, function(){
  console.log('listening to PORT');
});