var	wordsList = ["maltese", "chihuahua", "poodle"];
var chosenWord = "";
var underScore = [];
var guessedLeftScore = 10;
var	guessedWrong = [];


function startGame(){
	guessedLeftScore = 15;
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
}
	//startGame when refresh the page
	startGame();
	console.log(chosenWord);
//check what letter was letterGuessed
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
		//wrong guess
	} else{
		guessedLeftScore--;
		
		document.getElementById('guessedLeft').innerHTML = guessedLeftScore;
		guessedWrong.push(letterGuessed);
		beenGuessed.innerHTML = guessedWrong.toString();
		if (guessedLeftScore < 1){
			
		startGame()
		}
	}
}
		
	
	