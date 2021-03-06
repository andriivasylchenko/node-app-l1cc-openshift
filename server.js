var express = require('express');
var monk = require('monk');
var basicAuth = require('basic-auth-connect');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

const db = monk('mongodb/nodetest1');
const collection = db.get('logscollection');

app.get('/database/getData', basicAuth(process.env.API_USER, process.env.API_PASSWORD), function (req, res) {
  collection.find().then((docs) => {
    res.json(docs);
  }).catch((error) => {
    res.status(500).json(error);
  }).then(() => db.close())
})
  
app.post('/database/postData', basicAuth(process.env.API_USER, process.env.API_PASSWORD), function (req, res) {
  collection.insert(req.body).then((docs) => {
    res.json(docs);
  }).catch((error) => {
    res.status(500).json(error);
  }).then(() => db.close())
})

app.get('/database/removeData', basicAuth(process.env.API_USER, process.env.API_PASSWORD), function (req, res) {
  collection.remove({}).then((docs) => {
    res.json(docs);
  }).catch((error) => {
    res.status(500).json(error);
  }).then(() => db.close())
})

app.listen(8080, '0.0.0.0', function() {
  console.log("server started");
})
