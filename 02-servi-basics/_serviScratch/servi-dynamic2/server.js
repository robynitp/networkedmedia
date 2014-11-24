var servi = require('servi');

var app = new servi(true);


serveFiles("public");

route('/api', serveAPI);
function serveAPI(request) {
	request.header("application/json");
  	request.serveFile("json/weather.json");
}


/*if (typeof run === 'function') {
  app.defaultRoute(run);
}*/
start();