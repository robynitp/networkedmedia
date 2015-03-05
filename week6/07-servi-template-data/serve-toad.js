var servi = require('servi');
var app = new servi(true);
port(3002); 
start();
route('/',showHome);
route('/toads/:toadName',getToad); 

myToadCollection = {
  yosemite: {
     common_name: 'Yosemite Toad',
     scientific_name: 'Anaxyrus canorus',
     description: 'A robust and stocky toad with dry, uniformly warty skin.',
     photo: 'http://www.californiaherps.com/frogs/images/acanorusac7116.jpg',
     sounds: 'http://www.californiaherps.com/sounds/bcanorus7.mp3'
  },
  boreal: {
     common_name: 'Boreal Toad',
     scientific_name: 'Anaxyrus boreas boreas',
     description: 'A large and robust toad with dry, warty skin.',
     photo: 'http://www.californiaherps.com/frogs/images/bbboreasrnphumboldt.jpg',
     sounds: 'http://www.californiaherps.com/sounds/bbboreasfl406solo.mp3'
  }
};

function showHome(request){
  var toadListText = '';
  for (shortname in myToadCollection){
    //console.log(i);
    var toad = myToadCollection[shortname];
    // <li><a href="toads/yosemite">Name</a></li>
    toadListText += '<li><a href="toads/' + shortname + '">' + toad.common_name + '</a></li>';
  }
  var title = "<h1>My Toads</h1>";
  request.respond(title + toadListText);
}
function getToad(request){
  var tname = request.params.toadName; // 'yosemite' or 'boreal'
  var currentToad = myToadCollection[tname]; // indiv. toad object
  request.render('toad_profile.html',currentToad);
}