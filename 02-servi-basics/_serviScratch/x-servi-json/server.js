//var data = {a:123,b:456};


route("/myapi/:file", serveMyJSON);

function serveMyJSON(request) {
    var filename = request.params.file;
    request.header("application/json");
    //request.respond(JSON.stringify(data));
    request.serveFile("json/"+filename);
}