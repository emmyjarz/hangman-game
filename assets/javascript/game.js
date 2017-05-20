var	wordsList = ["maltese", "chihuahua", "poodle", "beagle", "bolognese",
				 "dachshund", "pomeranian", "pug", "havanese", "papillon", "pekingese"];
var chosenWord = "";
var underScore = [];
var guessedLeftScore = 10;
var	guessedWrong = [];
var winScore = 0;
var loseScore = 0;


function startGame(){
	guessedLeftScore = 10;
	guessedWrong = [];
	underScore = [];
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
	arrChosenWord = chosenWord.split("");

	//create underscore
	for(var i =0; i<arrChosenWord.length; i++){
	underScore.push(" _ ");
	}	
//show on HTML
	document.getElementById('currentWord').innerHTML = underScore.join("");
	document.getElementById('guessedLeft').innerHTML = guessedLeftScore;
	document.getElementById('beenGuessed').innerHTML = guessedWrong;
	document.getElementById('lose').innerHTML = "Let's Go!!";
	document.getElementById('chosenDog').innerHTML = "Who am I?"
	document.getElementById("image").setAttribute("src", "assets/images/guess.gif");
}
	//startGame when refresh the page
	startGame();

//check what is letterGuessed
document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	checkLetters(letterGuessed);
}

function checkLetters(letterGuessed){
	
	//check if letterGuessed is in the chosenword
	if(chosenWord.indexOf(letterGuessed) >-1){
		// correct guess
		for (var i=0; i< chosenWord.length; i++){
			if(letterGuessed == arrChosenWord[i]){
				underScore[i] = letterGuessed;	
				document.getElementById('currentWord').innerHTML = underScore.join("");
				
			}
		
		}
		//win
	} if (underScore.join("") == arrChosenWord.join("")){
		win();

		
		//wrong guess
	} else{
		guessedLeftScore--;
		document.getElementById('guessedLeft').innerHTML = guessedLeftScore;
		guessedWrong.push(letterGuessed);
		document.getElementById("beenGuessed").innerHTML = guessedWrong.toString();
		//warning
		if (guessedLeftScore == 1){
		document.getElementById("lose").innerHTML = "last Chance!!";
		//lose	
		} if (guessedLeftScore == 0){
			lose();
			
		}
	}
}

function lose(){
	loseScore++;
	document.getElementById("loseScore").innerHTML = "LOSES: " + loseScore;
	document.getElementById("chosenDog").innerHTML = chosenWord;
	document.getElementById("image").setAttribute("src", "assets/images/" + chosenWord + ".jpg" );
	setTimeout(function () {
		startGame();
	}, 2000);

}	

function win(){
	winScore++;
	document.getElementById("winScore").innerHTML = "WINS: " + winScore;
	document.getElementById("chosenDog").innerHTML = chosenWord;
	document.getElementById("image").setAttribute("src", "assets/images/" + chosenWord + ".jpg");
	setTimeout(function () {
		startGame();
	}, 2000);

}	