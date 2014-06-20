
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	/*
	var coun = 0;
	$("#count").text(coun);
	var one = "Make your Guess";
	var two = " ";
	var play = function(guess) {
		coun++;
		
		if(isNaN(guess) || guess > 100 || guess < 1 || !Number.isInteger(guess)){
			$("#feedback").text("Please insert an integer between 1 and 100 (inclusive)");
		} else {
			var target = Math.random() + 1;
			target *= 10;
			//alert(target);
			target = Math.floor(target);
			//alert(target);
			//var i = 0;
			
			if(guess != target){
			
				var x = abs(guess - target);
				var ant = {};
				ant[i] = x;
				i++;
				if( x < 10 ){
					$("#feedback").text("Burning Hot");
					one = "Burning Hot";
				} else if (10 <= x < 20){
					$("#feedback").text("Hot");
					one = "Hot";
				} else if (20 <= x < 30) {
					$("#feedback").text("Warm");
					one = "Warm";
				} else if (30 <= x < 50) {
					$("#feedback").text("Cold");
					one = "Cold";
				} else if (50 <= x < 70) {
					$("#feedback").text("Freezing");
					one = "Freezing";
				} else if (70 <= x ) {
					$("#feedback").text("Antartica");
					one = "Antartica";
				};
				
				if(ant[i-1] > x ){
					$("#feedback").text().append(" and Closer");
					two = " and Closer";
				} else if (ant[i-1] == x){
					$("#feedback").text().append(" just as close");
					two = " just as close";
				} else {
					$("#feedback").text().append(" and further");
					two = " and Further away";
				};
			}	
			else {
				$("#feedback").text("Got it");
				 };	
				
			
		
		}
		
	
	};
	
	$("#guessButton").click(function(){
		play((+$("#userGuess").val()));
		
	});*/
	
	var count
		, random;
		
	
	
	
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
		var arr = [];
		//alert(x);
		//alert(typeof(x));
		var a = "Burning";
		var b = "Hot";
		var c = "Warm";
		var d = "Cold";
		var e = "Freezing";
		var f = " Antarctica";
		var g = " and Hotter";
		var h = " and Colder";
		
		if(x != NaN && x>=1 && x<=100){
			//alert((x));
			//arr[count] = x;
			//alert(arr.length);
			count++;
			$("span#count").text(count);
			var guess = $("input#userGuess").val();
			var y = Math.abs(x - random);
			arr[count - 1] = y;
			//alert(guess);
	
			if (guess == random){
				//alert("good");
				$("h2#feedback").text("Got it!");
				$("input.button").val("Play Again!")
				$("input.button").on("click", function(){
					newGame();
				});
			} else {
				//alert("gret");
				//$("h2#feedback").text("Guess Again");
				var li = $("<li></li>");
				$(li).text(guess);
				$("input.text").val("");
				$("ul#guessList").append(li);
			
				if(count % 12 == 0){
					$("ul#guessList").append("<br>");
				};
				
				if(y < 5){
					$("h2#feedback").text(a);
				} else if(y < 15){
					$("h2#feedback").text(b);
				} else if (y < 25){
					$("h2#feedback").text(c);
				} else if (y < 35){
					$("h2#feedback").text(d);
				} else if (y < 45){
					$("h2#feedback").text(e);
				} else {
					$("h2#feedback").text(f);
					$("h2#feedback").text().append(" kndwknd");
				};
				
			};
			
			
		
		} else {
			$("h2#feedback").text("Insert an integer between 1 & 100 (inclusive)");
			$("input.text").val("");
			
		};
		
		
	
	});
	
	newGame();
	//$("span#count").text(count);
	
});


