var fs = require("fs");

function slidePrinter(error, content){
	if (error) {
		console.log("you have an error");
		console.log(error);
	} else {
		var slides = content.split("----");
		slides.forEach(function(slide){
			console.log(slide);
		})
	}
}

fs.readFile("./slides.txt", "utf8", slidePrinter);