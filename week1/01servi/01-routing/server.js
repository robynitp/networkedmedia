// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);  // make sure "port()" line comes before "start()"
start();
// set up the routes
route('/',takeMeHome);
route('/about',showAboutPage);
route('/faq',viewFaq);

function showHome(request){
	// serve a simple string
	request.respond("This is the home page.");
}

function myAboutPage(request){
	// build a string with some HTML in it
	var myHtmlString = "<h1>About Me!!!</h1>";
	myHtmlString += "<p>I am a person from earth.</p>";
	// serve the HTML string
	request.respond(myHtmlString);
}

function viewFaq(request){
	// serve a static HTML file
	request.serveFile('faq.html');
}

