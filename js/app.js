
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
	var arr = [];
	
	
	
	var newGame = function(guess){
	
		count = 0;
		$("span#count").text(count);
		random = Math.random() + 1;
		random *= 10;
		random = Math.floor(random);
		$("input.text").val("");
		$("ul").find("li").remove();
		$("h2#feedback").text("Make a guess");
		alert(random);
	};
	
	
	
	$("input#guessButton").on("click", function(e){
		e.preventDefault();
		
		var x = +$("input#userGuess").val();

		if(x != NaN && x>=1 && x<=100){

			count++;
			$("span#count").text(count);
			var guess = $("input#userGuess").val();
			var y = Math.abs(x - random);
			arr[count - 1] = y;
	
			if (guess == random){
				$("h2#feedback").text("Got it!");
				$("input.button").val("Play Again!")
				$("input.button").on("click", function(){
					newGame();
				});
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
				a = a + " and Hotter";
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
		
		
	
	});
	
	newGame();
	
	
});


