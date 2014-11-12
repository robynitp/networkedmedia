/*
Adapted from 
https://github.com/lmccart/itp-creative-js/tree/master/week4/01_p5_examples/07_external_API_nytimes

For information on the NYTimes Article Search API, see:
http://developer.nytimes.com/docs/read/article_search_api_v2
*/

function setup() {
  createCanvas(1200, 400);
  noLoop();
  noStroke();
  fill(0);
  
  var baseUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&q=";
<<<<<<< HEAD
  var apiKey = "sample-key"; //this key works
=======
  var apiKey = "sample-key";
>>>>>>> 5f6798d5d4d4e0a3c40455d302f5bada10de05b1
  var searchTerm = "net+neutrality"; // "obama", "middle+east", "net+neutrality", "earthquake", etc  
  var url = baseUrl + searchTerm + "&api-key=" + apiKey;
  loadJSON(url, drawDocs);
}

function draw() {
}

function drawDocs(data) {
  var docs = data.response.docs;
  for (var i=0; i<docs.length; i++) {
    text(docs[i].snippet, 100, 20*i);
  }
}
