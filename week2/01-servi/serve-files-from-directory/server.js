/*
 
This script allows you to set up a directory (aka, folder) where servi will look for static files.
This means you don't have to serve each file individually, as in:
    request.serveFile('home.html'); 

Here, it will automatically serve any file that is:
	1. Contained in the folder you specify
	2. Requested via the URL.

For example, if you tell Servi to use the directory called "public_html",
and inside it, you have a filed called "bio.html",
when someone visits YOUR_IP_ADDRESS/bio.html, the file bio.html will be displayed.

Notice that you don't need to put the name of the directory in the URL. 
Servi handles that part for you. 

NICE TO KNOW: Servi is set up so that if you include a file called "index.html", 
it will show up automatically as your home page.

 */ 

// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3222);



// serve files from a directory named "public"
serveFiles("public");

/* NOTE: 
	Make sure you have a directory called "public"
	that resides on the same level as your server.js file 
	and that "public" has at least one HTML file in it. 

	(fwiw, you don't have to call it "public", just make sure it matches the folder name)
*/

// start it!
start();

