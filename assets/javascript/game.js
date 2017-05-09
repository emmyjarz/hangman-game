var currentWord = document.getElementById('currentWord');


//var comPickedLength = comPicked.length;
var wins = document.getElementById("wins");
var	loses = document.getElementById('loses');
var	guessedLeft = document.getElementById('guessedLeft');
var	beenGuessed = document.getElementById('beenGuessed');
var winScore = 0;
var letterPress = [];
/*var loseScore = 0;*/
var guessedLeftScore = 15;
	guessed = [];
	comChoice = ["maltese"/*, "chihuahua", "poodle"*/];





//change comPicked to underscore
/*for(i = 0; i<comPicked.length; i++){
	comPickedArr.push(i)	
	var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
	currentWord.textContent = "_ ";*/

/*var mystring = computerPicked.charAt(i);

var newString = mystring.replace(/computerPicked.charAt(i)/g, "_ ");
console.log(newString);*/
//}

	
//console.log(currentPicked.length);

/*for(i = 0; i<7; i++){
	var current = currentWord.textContent = "_ ";
	current += current;
}
var mystring = 'This is a string';
var newString = mystring.replace(/i/g, "a");
console.log(newString);*/

	document.onkeyup = function(event) {
	 
	 	var userGuess = event.key;
	 	
	 	


        // Determine which key was pressed
        var comPicked = comChoice[Math.floor(Math.random() * 1)];
      /*  console.log(comPicked);
        console.log(comPicked[0]);

        currentWord.textContent = "_ "
        currentWord.textContent = "_ _ "*/
  
       for(i=0; i<comPicked.length; i++){
	currentWord.textContent = currentWord.textContent+ " _ ";
}
  
       
       
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") ||
    	(userGuess === "d") || (userGuess === "e") || (userGuess === "f") ||
    	(userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
    	(userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
    	(userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
    	(userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
    	(userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
    	(userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
    	(userGuess === "y") || (userGuess === "z")) {

    	//check if letter in the word
    	var checkLetter = comPicked.indexOf(userGuess);
 		
 	
 


    if(checkLetter >-1){
    	
    	currentWord.textContent = userGuess;
    
    	//check what position of userGuess in comPicked.
 	for(i = 0; i < comPicked.length; i++){
  	
    		if (userGuess == comPicked.charAt(i)){
    			currentWord.textContent = userGuess;
    	}	
    	}
    	}else{
    	//that letter isn't in comPicked
    
    	guessedLeftScore--;

		guessedLeft.textContent = guessedLeftScore;
		guessed.push(userGuess);
		beenGuessed.textContent = guessed.toString();
		if(guessedLeftScore < 0){
			resetLose();
   		 }
     }
	

}
}


function resetLose(){
	guessedLeftScore = 15;
	guessedLeft.textContent = "15";
	guessed = [];
	beenGuessed.textContent = "";
	/*loseScore++;
	loses.textContent = loseScore;*/
}
/*function resetWin(){

	guessedLeftScore = 9;
	guessedLeft.textContent = "9";
	guessed = [];
	beenGuessed.textContent = "";

}
*/