var express = require("express"); 
//var cors = require('cors')
var app = express();
//app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Ejemplo: GET http://localhost:8080/items
app.get('/items', function(req, res, next) {
  if(req.query.filter) {
	next();
	return;
  }
  res.send('Get all');
  console.log('Get all');
});

//Ejemplo: GET http://localhost:8080/items?filter=ABC
app.get('/items', function(req, res) {
  var filter = req.query.filter;
  res.send('Get filter ' + filter);
  console.log('Get filter ' + filter);
});

//Ejemplo: GET http://localhost:8080/items/10
app.get('/items/:id', function(req, res, next) {
  var itemId = req.params.id;
  res.send('Get ' + req.params.id);
  console.log('Get ' + req.params.id);
});

//Ejemplo: POST http://localhost:8080/items
app.post('/items', function(req, res) {
	var data = req.body.data;
	res.send('Add ' + data);
	console.log('Add ' + data);
});

//Ejemplo: PUT http://localhost:8080/items
app.put('/items', function(req, res) {
	var itemId = req.body.id;
	var data = req.body.data;
	res.send('Update ' + itemId + ' with ' + data);
	console.log('Update ' + itemId + ' with ' + data);
});

//Ejemplo: DELETE http://localhost:8080/items
app.delete('/items/:id', function(req, res) {
	var itemId = req.params.id;
	res.send('Delete ' + itemId);
	console.log('Delete ' + itemId);
});
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});