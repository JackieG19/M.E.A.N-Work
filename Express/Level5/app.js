var express = require('express');
var app = express();
var datetime = new Date();
var name = require('./routes/cities');

app.use(express.static('public'));

app.use('/cities', name);

app.listen(process.env.PORT, function() {
  console.log('Listening on PORT');
  console.log(datetime);
 });