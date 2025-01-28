// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let timer, gameOver;

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playButtonEl = document.getElementById('play');
const feedButtonEl = document.getElementById('feed');
const sleepButtonEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const resetButtonEl = document.getElementById('restart');


/*-------------------------------- Functions --------------------------------*/

const init = function() {
    gameOver = false;
    timer = setInterval(runGame, 2000);
    console.log('initializing');
};

const runGame = function() {
    console.log('game is running!');
};

/*----------------------------- Event Listeners -----------------------------*/


// begin

init();