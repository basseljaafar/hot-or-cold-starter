
$(document).ready(function(){
	
	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	var count;
	var random;
	var a;
	var arr;
	
	
	var newGame = function(guess){
	
		
		arr = [];	
		count = 0;
		$("span#count").text(count);
		random = Math.random();
		random *= 100;
		random = random++;
		random = Math.floor(random);
		$("input#userGuess").val("");
		$("ul#guessList").find("li").remove();
		$("h2#feedback").text("Make a guess");
		$("input.button").val("Guess");
		alert(random);
	};
	
	
	
	$("input#guessButton").on("click", function(e){
		e.preventDefault();
		
		if($("input.button").val() == "Play Again!"){
			newGame();
		} else {
		
		var x = +$("input#userGuess").val();
		var z = x.toFixed(0);

		if(x != NaN && x>=1 && x<=100 && x == z){

			count++;
			$("span#count").text(count);
			var guess = $("input#userGuess").val();
			var y = Math.abs(x - random);
			arr[count - 1] = y;
	
			if (guess == random){
				$("h2#feedback").text("Got it!");
				$("input.button").val("Play Again!");
				//$("input.button").on("click", function(e){
					//e.preventDefault();
					//newGame();
					//e.preventDefault();
				//});
			} else {
				var li = $("<li></li>");
				$(li).text(guess);
				$("input.text").val("");
				$("ul#guessList").append(li);
			
				if(count % 12 == 0){
					$("ul#guessList").append("<br>");
				};
				
				if(y < 5){
					a = "Burning";
				} else if(y < 15){
					a = "Hot";
				} else if (y < 25){
					a = "Warm";
				} else if (y < 35){
					a = "Cold";
				} else if (y < 45){
					a = "Freezing";
				} else {
					a = " Antarctica";
				};
				
			if(count != 1 && arr[count - 1] < arr[count - 2]){
				a = a + " and Warmer";
				$("h2#feedback").text(a);
			} else if (count != 1 && arr[count - 1] == arr[count- 2]){
				a = a + " and just as Hot";
				$("h2#feedback").text(a);
			} else if (count != 1 && arr[count - 1] > arr[count - 2]){
				a = a + " and Colder";
				$("h2#feedback").text(a);
			};
			
			$("h2#feedback").text(a);
			
			};
			
			
		
		} else {
			$("h2#feedback").text("Insert an integer between 1 & 100 (inclusive)");
			$("input.text").val("");
			
		};
		}
	});
	
	
	newGame();	
	
	$(".new").on("click",function(){
		newGame();
	});
	
});


