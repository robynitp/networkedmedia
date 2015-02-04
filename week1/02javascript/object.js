// the object allColors has 3 properties, "red", "green", and "blue"
// each property contains an object with 2 properties, "title" and "hexcode"
var allColors = {
	red: {
		title: "Red as in Crimson",
		hexcode: "#ff0000"
	},
	green: {
		title: "Green as in Kale",
		hexcode: "#00ff00"
	},
	blue: {
		title: "Blue as in Sky",
		hexcode: "#0000ff"
	},
};

console.log("The object containing all the color objects:");
console.log(allColors); // outputs the entire object

// when the name of the property is a string, use the dot (.) syntax
console.log(allColors.blue); // outputs the object associated with the property "blue"

// when the property name is the value of a variable, use square brackets, []
var color = "red";

var chosenColorObject = allColors[color]; 

console.log("The object with the property name, " + color + ":");
console.log(chosenColorObject); // outputs the object associated with the property "red"
