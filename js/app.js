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

// const playButtonEl = document.getElementById('play');
// const feedButtonEl = document.getElementById('feed');
// const sleepButtonEl = document.getElementById('sleep');

const buttonEls = document.querySelectorAll('.button-wrapper > button');

const gameMessageEl = document.getElementById('message');
const resetButtonEl = document.getElementById('restart');


/*-------------------------------- Functions --------------------------------*/

const init = function() {
    gameOver = false;
    timer = setInterval(runGame, 2000);
    console.log('initializing');
    render();
};

const runGame = function() {
    updateStates();
    checkGameOver();
    render();
};

const render = function() {
    boredomStatEl.innerText = state.boredom;
    hungerStatEl.innerText = state.hunger;
    sleepinessStatEl.innerText = state.sleepiness;
    if (gameOver) {
        window.clearInterval(timer);
        gameMessageEl.classList.remove('hidden');
        resetButtonEl.classList.remove('hidden');
    }
};

const generateRandomIncrement = function() {
    return Math.floor(Math.random() * 4);
};

const updateStates = function() {
    state.boredom += generateRandomIncrement();
    state.hunger += generateRandomIncrement();
    state.sleepiness += generateRandomIncrement();
};

const checkGameOver = function() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    };
};

const handleClick = function(e) {
    console.log(e.target);
};

/*----------------------------- Event Listeners -----------------------------*/

buttonEls.forEach(b => b.addEventListener('click', handleClick));

// begin

init();