/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Create the dice - need to use math object Math.random() and math.floor() to remove the decimal
//      this is instead placed into our eventlistener as an anonymous function.
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);


// DOM manipulation


// select HTML element with document.querySelector('#elementName'), and concatenate the string to allow for active player change
// changing the content of an HTML element with .textContent

/*These lines of code also are being used inside of function instead.  They were just to test things out.
//document.querySelector('#current-' + activePlayer).textContent = dice;      // SETTER
// selecting the HTML id for active player, changing text here

// To change the content of the selection with textContent, ONLY for plain text, not HTML

// To put some HTML also in the selected element, use the inner HTML method instead of textContent.
// When writing HTML in our code, it MUST BE A STRING.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;                 // GETTER
//console.log(x);

// using querySelector to change the CSS of class="dice"    ('.className').style.cssProperty = 'cssValue';
// Setting up an event handler -  .addEventListener('typeOfEvent', functionName)


// Using document.getElementById('idString') instead of querySelector.  Doesn't use the CSS style
*/


var score, roundScore, activePlayer, gamePlaying;

init();

// What happens in the event of clicking the 'Roll Dice' button
document.querySelector('.btn-roll').addEventListener('click', function() {  // anonymous function

    // wrapping everything inside if/else statement to only work when gamePlaying state variable is true.
    if (gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;   // only this anonymous function can access dice variable

        // 2. Display the result - can create a variable that stores img selection, to use when needed.
        var diceDOM = document.querySelector('.dice'); // can now use variable 'diceDOM' instead of writing it out
        diceDOM.style.display = 'block';
                // changing the image with .src
        diceDOM.src = 'dice-' + dice + '.png';     // concatenating so the dice roll correpsonds with its img.

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player function for dry principle.
            nextPlayer();
        }
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

        // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';

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

