// code quiz

// implement a function where questions will be cycled through with 
// functions in of themselves; a button will initiate a countdown (function) 
// with a scoring function for high scores; include a game over and would you
// like to play again function.

// global variables (make an array?)
var javaQuiz = document.querySelector('#js-quiz-btn');
var htmlQuiz = document.querySelector('#html-quiz-btn');
var cssQuiz = document.querySelector('#css-quiz-btn');
var randomQuiz = document.querySelector('#random-quiz-btn');
var highscore = document.querySelector('#highscore-btn');
var countdownTimer = 3;
var quizTimer = 120;

var timerEl = document.createElement('div');
document.body.append(timerEl);

// Overall function linked to html buttons for starting one of 4 quizzes
function quiz1() {

    // local variables

    // Function for questions to cycle
    function cycle() {

        // Function for question 1 (entails boolean with one correct answer and score addition)
        function question1() {


        };

        // Function for question 2 (give variables a value)
        function question2() {
            console.log(question2);

        };

        // Function for question 3
        function question3() {
            console.log(question3);

        };

        // Function for question 4
        function question4() {
            console.log(question4);

        };
    };



};

// Function for countdown
var countdown = setInterval(function () {

    timerEl.textContent = countdownTimer;
    countdownTimer--;

}, 1000);

// quiztimer function
var timer = setInterval(function () {

    timerEl.textContent = quizTimer;
    quizTimer--;
    if (quizTimer <= 0) endGame();
}, 1000);

// Function for timer during quiz; synced to scoring(move outside function?w/eventListener)
function score(quizTimer) {

    // Function for storing scores with name input available;
    var highScore = localStorage.getItem('highscore');
    if (highScore === null) {
        highScore = 0;
    };
};



//endCountdown function
function endCountdown() {

    clearInterval(countdown);
};

//endgame function
function endgame() {

    clearInterval(timer);
};

function storage(event) {
    event.preventDefault();
    
    document.append('ol');
    document.

};

// addeventlistener(click)
// javaQuiz.addEventListener('click', quiz1);
// htmlQuiz.addEventListener('click', quiz2);
// cssQuiz.addEventListener('click', quiz3);
// randomQuiz.addEventListener('click', quiz4);
highscore.addEventListener('click', storage);





