let gameBoard = document.querySelector(".board");
let gameState = document.querySelector(".gameStatement");
let startButton = document.querySelector(".button");


let clickSound = new Audio("mixkit-modern-technology-select-3124.wav");
let gameStart = new Audio("gamestart.mp3");
let victory = new Audio("vicAud.mp3");
let wrongClick = new Audio("wrongclickTrimmed.wav");
let tieSound = new Audio("videogame-death-sound-43894.mp3");


let gamePlay = false;
let turn = "X";
let count = 1;


startButton.addEventListener("click", function () {
    if (gamePlay == false) {
        // gamePlay = true;
        gameStart.play();
        gameState.innerHTML = "X's Turn"
        startButton.innerHTML = "Press to Reset"
        startButton.style.backgroundColor = "red";
    }
    else {
        // gamePlay = false;
        clearAll();
        startButton.innerHTML = "Start";
        gameState.innerHTML = "";
        count = 1;
        turn = 'X';
        startButton.style.backgroundColor = "blue";
    }

    gamePlay = !gamePlay
    // console.log(gameplay);  

})

gameBoard.addEventListener("click", function (event) {
    // console.log(event.target);
    let block = event.target;

    //  console.log(block);


    if (gamePlay == true && block.innerHTML == "") {
        clickSound.play();

        block.innerHTML = turn;
        count++;

        if (turn == "X") {
            block.style.color = 'red';
            turn = "0";
        } else {
            block.style.color = 'blue';
            turn = "X";
        }

        gameState.innerHTML = turn + "'s turn ";

        if (winnerChecker() == 'X') {
            gameState.innerHTML = "X Wins the game "
            // startButton.click();
            // gamePlay = false;
            victory.play();
            restingTheGame();

        } else if (winnerChecker() == '0') {
            gameState.innerHTML = "0 wins the game "
            //gamePlay = false;
            // startButton.click();
            victory.play();
            restingTheGame();

        } else if (count == 10) {
            gameState.innerHTML = "TIE"
            // gamePlay = false;
            //startButton.click();
            tieSound.play();
            restingTheGame();

        }
    } else {
        wrongClick.play();
    }


})



function winnerChecker() {
    let blockArray = document.querySelectorAll(".cell");


    if ((blockArray[0].innerHTML == "X" && blockArray[1].innerHTML == "X" && blockArray[2].innerHTML == "X")
        || (blockArray[3].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[5].innerHTML == "X")
        || (blockArray[6].innerHTML == "X" && blockArray[7].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[6].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[3].innerHTML == "X" && blockArray[6].innerHTML == "X")
        || (blockArray[1].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[7].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[5].innerHTML == "X" && blockArray[8].innerHTML == "X")) {

        // console.log("X's wins");
        return "X";
    }

    else if ((blockArray[0].innerHTML == "0" && blockArray[1].innerHTML == "0" && blockArray[2].innerHTML == "0")
        || (blockArray[3].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[5].innerHTML == "0")
        || (blockArray[6].innerHTML == "0" && blockArray[7].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[6].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[3].innerHTML == "0" && blockArray[6].innerHTML == "0")
        || (blockArray[1].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[7].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[5].innerHTML == "0" && blockArray[8].innerHTML == "0")) {
        //   console.log("0's wins");
        return "0";
    }

    else {

        return 1;
    }


}
function clearAll() {
    let blockArray = document.querySelectorAll(".cell");
    // startButton.addEventListener("click" )
    for (let i = 0; i < blockArray.length; i++) {

        blockArray[i].innerHTML = "";
    }

}

function restingTheGame() {

    gamePlay = false;
    startButton.innerHTML = "Staring...";
    startButton.disabled = true;
    // gamePlay=false;
    // startButton.click();

    setTimeout(() => {
        startButton.disabled = false;
        clearAll();
        startButton.innerHTML = "Start"
        // startButton.click();
        gameState.innerHTML = "";
        count = 1;
        turn = 'X';
        startButton.style.backgroundColor = "blue";

    }, 3000);

}
