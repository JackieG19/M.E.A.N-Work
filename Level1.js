// Assignment Level 1

var express = require('express'); 
var app = express();

// Create a ‘/name’ route that returns your name
app.get('/name', function(request, response){
   response.write('hello world'); // Create a root route that returns “Hello World”
   response.end();
});

app.get('/name', function(request, response){
   // Create a /redirect route that sends you to /surprise with a moved permanently status code
   response.redirect(301, '/surprise');
});

// Create a route that returns the current date. You will need to look up how to get the current date.
