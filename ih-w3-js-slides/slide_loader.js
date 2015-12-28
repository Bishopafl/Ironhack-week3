var fs = require("fs");

function slideLoader (file, ){
	function splitSlides(err) {
		if (err) {
			console.log("Wrong bro.", err);
		} else {
			var slides = str.split("\n----\n");
		}
	}
	fs.readFile(file,"utf8", splitSlides);
}
module.exports = slideLoader;

