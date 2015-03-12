var servi = require('servi');
var app = new servi(true);
var http = require('http');
var url = "http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA";
http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      console.log(data); // <-- this is a JSON string
      data = JSON.parse(data); // convert string to JSON object
      console.log(data.coord); // do stuff with the JSON data here
    });
  }).on("error", function(e) {
    console.log("Got error: " + e.message);
  });

