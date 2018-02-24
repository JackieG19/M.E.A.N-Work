// Assignmetn Express Level 4

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var datetime = new Date();

var cities = {
  'Nashville': 'Tennessee',
  'Hartford': 'Connecticut',
  'Concord': 'NewHampshire',
  'Providence': 'RhodeIsland', 
  'Harrisburg': 'Pennsylvania'
};
  
app.use(express.static('public'));

app.param('state', function(request, response, next){
  var state = request.state;
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
  var description = cities[request.state];
  if (!description){
    response.status(404).json('error');
  } else{
  response.json(description);
  }
}); 

app.post('/cities', parseUrlencoded, function(request, response) {
   if (request.body.city.length > 4 || request.body.state.length > 2) {
      var newCity = request.body;
      cities[newCity.city] = newCity.state;
      response.status(201).json(newCity.city);
   } else {
     // response.status(400,"'Please enter valid city and state'");
    response.status(400).json('Please enter valid city and state');
    console.log('Please enter');
   }
});

app.delete('/cities/:state', function(request, response) {
   delete cities[request.cityState];
   response.status(200);
});

app.listen(process.env.PORT, function(){
  console.log('listen on PORT');
  console.log(datetime);
});