var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Put get and post requests here

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });