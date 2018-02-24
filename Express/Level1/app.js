var express = require('express');
var datetime = new Date();
var app = express();


app.get('/', function(request, response) {
  response.send('Hello world');
}); // a root route that returns “Hello World”

app.get('/name', function(request, response) {
  response.send('Jackie');
}); // /name route that returns my name

app.get('/redirect', function(request, response) {
  response.redirect('/surprise');
}); // a /redirect route that sends you to /surprise 

app.get('/date', function(request, response) {
  response.redirect(datetime);
}); // a route that returns the current date


app.listen(process.env.PORT, function() {
  console.log('Listening on PORT');
  console.log(datetime);
 });