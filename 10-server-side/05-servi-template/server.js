// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(8080);

// set up the routes
route('/',viewHome);
route('/:page',viewPage);

// make an object to hold data to feed our template
var content = {
	pageTitle: "Cats on Mars",
	intro: "Cats on Mars explores the mysteries of space cats."
};

function viewHome(request){
	request.render("templates/page.template.html",content);
}

// an object with content for different pages
var pages = {
	work: {
		pageTitle: "Cats at Work",
		intro: "Martian cats work extremely hard all day long."
	},
	play: {
		pageTitle: "Play time for Cats on Mars!",
		intro: "A cat on Mars knows how to play like nobody's watching."
	},
	sleep:{
		pageTitle: "Asleep on the Red Planet",
		intro: "Even Martian cats sleep 18 hours a day."
	}
};

function viewPage(request){
	var pageName = request.params.page; // 'work','play', or 'sleep'
	if (pageName in pages){
		request.render("templates/page.template.html",pages[pageName]);
	} else {
		request.respond("Page not found");
	}
	
}
// --- START THE SERVER --- //
start();