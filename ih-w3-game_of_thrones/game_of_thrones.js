var fs = require("fs");
function fileActions(error, episodes){
	if (error){
		console.log("You have an error");
		throw(error);
	} 
	else {
		var parsedEpisodes = JSON.parse(episodes)
		
	
		var newNumbers = parsedEpisodes.sort(function(a, b){
  			return a.episode_number-b.episode_number;

		});


		// loop stars 
	
		newNumbers.forEach(function(episode){
		
		//loop for stars 
			var rating = episode.rating;
			var stars = Math.floor(rating);
			var star_array = ""
		
			for(i = 0; i <= stars; i++){
				star_array += "*"
			};

		// print the episodes

			console.log(episode.title, episode.episode_number);
			console.log(episode.description);
			console.log(rating + " " + star_array);
			console.log(" ");
		})
	}
}

fs.readFile("./GoTEpisodes.json", "utf8", fileActions)


