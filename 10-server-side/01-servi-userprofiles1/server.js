// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
//port(3111);
start();
// set up the routes
route('/',showHome);
route('/profile/:username',showProfile);

function showHome(request){
	request.respond("This is the home page.");
}

function showProfile(request){
	var content = "<h1>" + request.params.username + "</h1>";
	content += "<p>All the user's info here</p>";
    request.respond(content);
}

