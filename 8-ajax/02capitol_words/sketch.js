var baseUrl = "http://capitolwords.org/api/1/phrases.json?entity_type=state&entity_value=NY&apikey=";
var apiKey = "3e16c02bbb374110b558027c6adb189d";
var fullUrl = baseUrl+apiKey;
var words;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  loadJSON(fullUrl, getWords); 
  // set up text size
  textSize(32);
  // fill style for "loading" text
  fill(100);
  text("Loading Capitol Words ...", 100,100);
}
/*
// You could also use the draw function to make the words re-render continuously
function draw(){
  renderWords();  
}*/

function mousePressed(){
  renderWords();
}

function getWords(json){
  console.log(json); // for debugging, to view the full json result 
  words = json;  
  renderWords();
}

function renderWords(){
  background(255);
  // don't start drawing until there are words in the array
  if (words.length > 0){  
    console.log('got words');
    // words is an array of objects
    for (var i=0; i<words.length; i++){
      fill(random(0,85), random(85,170), random(0,255), random(80,100));
      // the actual word is stored in the ngram property of the word object
      text(words[i].ngram,random(width),random(height));
    }    
  } 
}
