// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);  // make sure "port()" line comes before "start()"

// serve a static HTML file
// notice the method name is serveFile(), not serveFileS()
request.serveFile('home.html'); 


// start the server
start();
