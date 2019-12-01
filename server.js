var bar= require('./index.js');
var express = require('express');
var bodyParser = require('body-parser');
var foo = express();
var mysql = require('mysql');
foo.use(bodyParser())
foo.use(bodyParser.urlencoded({ extended: true }));
foo.put("/mydb/y1", function(req, res) {
 bar.put(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.post("/mydb/y2", function(req, res) {
 bar.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.del("/mydb/y3", function(req, res) {
 bar.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

foo.get("/mydb/y4", function(req, res) {
 bar.get(req, function (status, response) {
    res.status(status).send(response);
  })
});


foo.listen(3002,function(){
 console.log("listening to 3002");
});
