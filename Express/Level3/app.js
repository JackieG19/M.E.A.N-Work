// Assignmetn Express Level 3

var express = require("express");
var app = express();
var datetime = new Date();

var cities = {
  'Nashville': 'Tennessee',
  'Hartford': 'Connecticut',
  'Concord': 'New Hampshire',
  'Providence': 'RhodeIsland', 
  'Harrisburg': 'Pennsylvania'
};
  
app.use(express.static('public'));

app.param('state', function(request, response, next){
  var state = request.params.state;
  var cityState = state[0].toUpperCase() + state.slice(1).toLowerCase();
  request.cityState = cities;
  next();
});

app.get('/cities', function(request, response){
    if (request.query.limit >= 0) { 
      response.json(Object.keys(cities).slice(0, request.query.limit));
        //response.json(cities.slice(0, request.query.limit)); 
   } else if (request.query.limit > cities.length) {
      response.status(404, "Error");
   } else  {
      response.json(Object.keys(cities));
   }
});

app.get('/cities/:state', function(request, response){
  var description = cities[request.params.state];
  if (!description){
    response.status(404).json('error' + request.params.state);
  } else{
  response.json(description);
  }
}); 


app.listen(process.env.PORT, function(){
  console.log('listen on PORT');
  console.log(datetime);
});