// get the main game board div
var board = document.getElementById("gameboard");

var numCards = 8; 

// list the images to be used. (each will be used twice)
var images = [
	"cat.png",
	"shoes.png",
	"boat.png",
	"drink.png"
	];
// make a new array that has 2 of each image
var double_images = images.concat(images);
// fyi, re: the concat function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// shuffle the order (see custom function below)
shuffle(double_images);
//console.log(double_images); // uncomment to see what's in the image array

// array to track which cards are turned over
var faceUpCards = [];
// track the number of successful matches
var numMatches = 0;


// Create the cards
for (var i=0; i<numCards; i++){
	// make a new div for each card
	var myCard = document.createElement("div");
	// add the class "gamecard" to the div element
	myCard.className = "gamecard";
	// give each card a unique id, eg, "card0","card1", etc
	myCard.id = "card"+i; 

	// append it to the gameboard div
	board.appendChild(myCard);
	
	// add the image (it is hidden by default with CSS)
	var pic = document.createElement("img");
	pic.src = "images/" + double_images[i]; // pick the next image in the array
	myCard.appendChild(pic);

	// add a listener to each card
	myCard.addEventListener("click",turnCard);

}

function turnCard(){
	/*
	 NOTE! The keyword "this" will refer to the <div> element you clicked on each time
	*/
	//console.log(this); // uncomment to see what "this" contains

	// the image is the first child of each card
	var currentImg = this.firstChild;
	// re: firstChild, see: http://www.w3schools.com/jsref/prop_node_firstchild.asp

	// if the image is not showing, show it
	if (currentImg.style.display != "block"){

		// First check that no more than two cards are turned over at once
		// (not including already matched cards)
		if (faceUpCards.length >= 2){
			alert("You can't turn over more than 2 cards at once!");
			return; //end the function here
		}

		// otherwise, show the card
		currentImg.style.display = "block";

		/* ----------------
			is it a match?
		   ---------------- */

		// Is another card turned over?
		if (faceUpCards.length > 0){ 			
			// 1. get the id of the other faced-up card in play
			var cardToCompare = faceUpCards[0]; // example: "card4"
			// 2. now get the <div> element with that id
			var compareDiv = document.getElementById(cardToCompare);
			// 3. now drill down to the <img> inside that div
			var compareImg = compareDiv.firstChild;
			// (you could do the above in fewer steps, but I'm breaking it down for clarity)

			// Is it a match?
			//    ie, is the comparison image the same as the current one?
			if (compareImg.src == currentImg.src){
				// add 1 to the count of matches
				numMatches++;

				// was this the final match?
				if (numMatches == numCards/2){
					alert("Finished! Good job!");
				} else {
					alert("Match!");
				}

				// set opacity on both matched cards
				this.style.opacity = "0.5";
				compareDiv.style.opacity = "0.5";

				// reset the array of face-up cards
				faceUpCards = [];
				return; // got a match, so exit the function here
			} 
		}
		// add the id (ex: "card3") to the array of faced-up cards
		faceUpCards.push(this.id);
				
	} else { // if this image is showing, hide it
		currentImg.style.display = "none";
		// remove if from the array of face up cards
		var indexNum = faceUpCards.indexOf(this.id);
		faceUpCards.splice(indexNum,1);
		// for more about these functions, see:
		//    http://www.w3schools.com/jsref/jsref_indexof_array.asp
		//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	}
	console.log(faceUpCards);
}


/**
 * Javascript doesn't have a built-in array shuffle function.
 * This one is borrowed from:
 *    http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}