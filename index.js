var express = require('express');
var app = express();
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req, res) {
  res.json({
    hp : 50,
    damages : 5,
    speed : 10,
    name : 'Bob',
    methode : req.method});
});

app.post('/',function(req, res) {
  res.json({
  message : "Update Hp",
  hp : req.body.hp,
  speed : 10,
  name : 'Bob',
  methode : req.method});
});




app.listen(3000)