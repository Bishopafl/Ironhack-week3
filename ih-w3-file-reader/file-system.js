console.log("start\n");

var fs = require("fs");

function print (error, content) {
	console.log("done reading file");

	if (error){
		console.log("Something went wrong...");
		console.log(error);
	} else {
		console.log(content);		
	}
}

fs.readFile("file.txt", "utf8", print);

console.log("end\n");