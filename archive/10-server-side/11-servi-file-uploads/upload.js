/*

Adapted from:
https://github.com/antiboredom/servi-ide/tree/master/examples/file-uploads
*/
var servi = require('servi');
var app = new servi(true);
port(3003);
start();

serveFiles('uploads');

route('/', form);
function form(request){
    request.serveFile('form.html');
}

route('/upload', upload);
function upload(request) {
    var file = request.files.file;
    uploadFile(file, "uploads");
    request.respond('<img src="' + file.name  + '">');
}