var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;
var winner = false;

function placeMarker(spotID){
    if (!gameOver){
        // get the spot by using document.getElement
        var spot = document.getElementById(spotID);

        // if the spot is empty, change spot.innerHTML to mark the spot
        if (spot.innerHTML === '') {
            spot.innerHTML=currentPlayer;
        
            if (currentPlayerWon()){
                updateGameStatus();
            }
            else {
                totalMove++;
                if (currentPlayer === 'X'){
                    currentPlayer = 'O';
                }
                else{
                    currentPlayer = 'X';
                }
                updateGameStatus();
            }
        }
        else{
            return;
        }
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('digit1');
    var s2 = document.getElementById('digit2');
    var s3 = document.getElementById('digit3');
    var s4 = document.getElementById('digit4');
    var s5 = document.getElementById('digit5');
    var s6 = document.getElementById('digit6');
    var s7 = document.getElementById('digit7');
    var s8 = document.getElementById('digit8');
    var s9 = document.getElementById('digit9');


    
    //rows
    if ((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) && (s1.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    else if ((s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) && (s4.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    else if ((s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML) && (s7.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    

    // columns
    else if ((s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML) && (s1.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    else if ((s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML) && (s2.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    else if ((s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML) && (s3.innerHTML != '')){
        winner = true;
        gameOver = true;
    }

    // diag
    else if ((s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML) && (s1.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
    else if ((s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML) && (s3.innerHTML != '')){
        winner = true;
        gameOver = true;
    }
   
    else {
        gameOver = false;
    }


    return gameOver;

}

function updateGameStatus(){
    var statusBoard = document.getElementById('status'); // div tag for Player's turn
    if (winner){
        statusBoard.innerHTML = "Player " + currentPlayer + " wins!";
        gameOver = true;
    }
    else if (totalMove === 9){
        statusBoard.innerHTML = "Tie!";
        gameOver = true;
    }
    else{
        statusBoard.innerHTML = "Player " + currentPlayer + "'s turn.";
        gameOver = false;
    }
}