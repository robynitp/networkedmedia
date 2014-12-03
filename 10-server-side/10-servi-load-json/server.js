/*
Example loading a local JSON file in Servi.js
and using it as a Javascript object 

*/
var servi = require('servi');
var app = new servi(true);
var http = require('http');
port(3000);
start();

// routes
route('/', fromFileDemo);
route('/jsonurl',fromUrlDemo);
function fromFileDemo(request){
	var content = '';

	// OPTION 1. Load a local JSON file
	loadJSON('weather.json',function(dataObj){
		// now you can use the contents of the JSON file as a regular JS Object
		var temp = dataObj.main.temp;
		var city = dataObj.name;

		console.log('loaded from file');
		content += "<p>The temperature in " + city + " was once " + temp + "F</p>";
		content += '<p><a href="/jsonurl">try loading JSON from url</a></p>';
		request.respond(content);
	});	
}

function fromUrlDemo(request){
	var content = '';

	// OPTION 2. Load JSON from a URL
	var myUrl = "http://api.openweathermap.org/data/2.5/weather?q=London,uk";
	loadJSON(myUrl,function(dataObj){
		// get data points from the object
		var temp = dataObj.main.temp;
		var city = dataObj.name;

		console.log("loaded from URL");
		content += "<p>The temperature in " + city + " right now is " + temp + "K</p>";
		content += '<p><a href="/">try loading JSON from file</a></p>';
		request.respond(content);
	});
}

/*
 ===
 === To work with JSON, add these 2 utility functions in your script === 
 === Then call loadJSON() as in the demos above.
 ===
*/

// load text from a url
function loadURL(url,onSuccess){
	var str = '';
	http.get(url, function(res) {
	  res.on("data", function(chunk) {
 	     str += chunk.toString();
 	  });
 	  res.on("end",function(){
 	  	onSuccess(str);
 	  });
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	  // use an onError() callback here?
	});
}

// load JSON from a local file or a URL
function loadJSON(path,callback){
	// is it a URL ?
	if (path.indexOf('http') === 0){
		loadURL(path, function(res){
			callback(JSON.parse(res));
		});		
	} else { // assume it's a file
		callback(JSON.parse(loadFile(path)));
	}	
}