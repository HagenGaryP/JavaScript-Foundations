/*
Coding Challenge: Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6's in a row.  After that, it's the next players turn.

2. Add an input field to the HTML where players can set the winning score, so they can change the
    predefined score of 100.  (look up the .value property for javascript)

3. Add another die to the game, so that there are two dice now.  The player loses his current score
    when one of them is a 1. (You will need CSS to position the second dice, so take a look at the CSS code
        for the first one.)

FIRST: You must comment out the HTML line that links the script to "app.js" by wrapping in <!--  -->

            <!--<script src="app.js"></script>-->

        Then link the HTML script src to this "challenges.js" file

            <script src="challenges.js"></script>
*/

var score, roundScore, activePlayer, gamePlaying, lastDice;

init();

// What happens in the event of clicking the 'Roll Dice' button
document.querySelector('.btn-roll').addEventListener('click', function () {  // anonymous function

    // wrapping everything inside if/else statement to only work when gamePlaying state variable is true.
    if (gamePlaying) {
        // 1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;   // only this anonymous function can access dice variable
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result - can create a variable that stores img selection, to use when needed.
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        // changing the image with .src
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';  
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';  

        // 3. Update the round score IF the rolled number was NOT a 1 or two 6's

        if (dice1 !== 1 && dice2 !== 1) {
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player function for dry principle.
            nextPlayer();
        }


        /*if (dice === 6 && lastDice === 6) {
            //player loses score
            scores[activePlayer] = 0;
            // update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            // switch to next player
            nextPlayer();

        } else if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player function for dry principle.
            nextPlayer();
        }

        // storing the lastDice value
        lastDice = dice; 
        */
    }


});

// functionality of the 'hold' button
document.querySelector('.btn-hold').addEventListener('click', function () {
    // only executes if gamePlaying state variable = true.
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;  // activePlayer toggles from 0 to 1, so it's the index of the array.

        // Update the User Interface (UI)
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // input score for final score to win game
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // check if input value is empty:  undefined, 0, null, or "" are COERCED to false
        //      anything else is coerced to true
        if (input) {
            winningScore = input;
            
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // change gamePlaying state variable to false
            gamePlaying = false;

        } else {
            // next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Next player - using Ternary Operator instead of if-statement
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // if activePlayer is 0, then activePlayer = 1 : else activePlayer = 0
    roundScore = 0;  // set roundscore back to zero

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // removing 'active' from the HTML for player-0-panel, adding it to player-1-panel for activePlayer
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    // using .toggle instead of removing and adding
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice when a 1 is rolled.

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// New Game button functionality
document.querySelector('.btn-new').addEventListener('click', init);  // EventListener calls init function


// initializing the game
function init() {
    // reset scores
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; // had to set gamePlaying to true for game to work, but the lecturer did not have to.

    // removes the dice display
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // setting score displays to '0' - .getElementById does not use the element's prefix ( # and . )
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // displaying player 1 and player 2, instead of 'winner!'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    // removing the winner and active strings from both player panels
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // addding the active player to player 1
    document.querySelector('.player-0-panel').classList.add('active');
}