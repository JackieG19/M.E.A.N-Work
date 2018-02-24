var express = require('express');
var app = express();
var datetime = new Date();

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Nashville', 'Hartford', 'Concord', 'Providence', 'Harrisburg'];
  res.send(cities);
}); // a /cities route with at least 4 cities


app.listen(process.env.PORT, function() {
  console.log('Listening on PORT');
  console.log(datetime);
 });
 
  