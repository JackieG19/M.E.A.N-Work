var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });


var cities = {
  'Nashville': 'Tennessee',
  'Hartford': 'Connecticut',
  'Concord': 'NewHampshire',
  'Providence': 'RhodeIsland', 
  'Harrisburg': 'Pennsylvania'
};
  
router.route('/')
    .get(function(request, response) {
        if (request.query.limit > cities.length) {
        response.status(404).json('Error: limit may not exceed' + cities.length);
        }   
        if (request.query.limit > 0) {
         response.json(cities.slice(0, request.query.limit));
        } else {   
         response.json(Object.keys(cities));
        }
    })
    .post(parseUrlencoded, function (request, response) {
        var newCity = request.body;
        if (newCity.city.length >= 4 || newCity.state.length >= 2) {
         cities[newCity.city] = newCity.state;
         response.status(201).json(newCity.city);
        } else {
         console.log('Enter a valid city and state');
         response.status(400).json('Please enter a valid city and state');
        }
    });
   
router.route('/:state')   
    .all(function(request, response, next) {
        var state = request.params.state;
        var city = state[0].toUpperCase() + state.slice(1).toLowerCase();
        request.cityState = city;
        next();
    })
    .get(function(request, response) {
        var description = cities[request.cityState];
        if (!description) {
         response.status(400).json('City not found!');
        } else {
         response.json(description);
        }
    })
    .delete(function(request, response) {
        delete cities[request.cityState];
        response.status(200);
    });
   
module.exports = router;