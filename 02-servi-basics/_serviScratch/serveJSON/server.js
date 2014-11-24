var servi = require('servi');
var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {
    request.respond("Hello World");
}


route("/myapi/:file", serveMyJSON);

function serveMyJSON(request) {
    var filename = request.params.file;
    request.header("application/json");
    try{
        var file = loadFile("json/"+filename);
        request.respond(file);
    } catch(e){
        request.respond('No file found');
    }
    
    
    //console.log('json!');
    
}


start();