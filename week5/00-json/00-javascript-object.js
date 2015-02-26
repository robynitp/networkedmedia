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
console.log(allColors);

var color = "red";

var chosenColorObject = allColors[color];

console.log("The object with the property name, " + color + ":");
console.log(chosenColorObject);