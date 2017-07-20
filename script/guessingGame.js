
function myGame() {
	var bank1 = 10;
	var bank2 = 5;
	var bank3 = 2;
	var bankKoef = 3;
	var gameNumber = 1;
	var prize = 0;
	var maxRange = 5;
	var rangeKoef = 2;
	var gameMaxRange

	function continueGame(){
		prize += bank1; console.log(prize);
		if (!continueGame()) {
			endGame(prize);
			startgame = false;
		} else {
			gameNumber++;
		}
	}
	function continueGame(){
		return confirm("Чи бажаєте продовжити гру?");
	}
	function endGame(prize){
		alert( "Дякуємо за гру, ваш виграш становить:" + prize);
	}
	var startGame = confirm("Чи бажаєте почати гру?");
	if (startGame === false ) {
		alert("Сьогодні ви не виграли мільйон, а могли")
	}
	while(startGame === true) {
		if (gameNumber === 1) {
			gameMaxRange = maxRange;
		} else {
			bank1 = bank1 * bankKoef;
			bank2 = bank2 * bankKoef;
			bank3 = bank3 * bankKoef;
			gameMaxRange = gameMaxRange * rangeKoef;
		}
		for (var i = 0; i < 3 ; i++) {
			var randomNumber = Math.floor(Math.random() * gameMaxRange + 1);
			//console.log(randomNumber)
			var playerNumber = parseInt(prompt("Введіть число від 0 до " + gameMaxRange ), 10);
			if (typeof playerNumber !== "number") {
				alert("not a number");
				break;
			}
			if (randomNumber === playerNumber) {
				if (i === 0) {
					continueGame();
					break;
				}
				else if (i === 1) {
					continueGame();
					break;
				}
				else if (i === 2) {
					continueGame();
					break;
				}
			} else if (i === 2) {
				//не вгадав
				endGame(prize)
				if (!continueGame()) {
					startGame = false;		
					break;
				} else {
					gameNumber++;
				}
			}
		}
	}
}

myGame();