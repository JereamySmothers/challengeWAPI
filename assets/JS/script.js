// code quiz

// implement a function where questions will be cycled through with 
// functions in of themselves; a button will initiate a countdown (function) 
// with a scoring function for high scores; include a game over and would you
// like to play again function.

// global variables (make an array?)
var javaQuiz = document.querySelector(js-quiz-btn);
var htmlQuiz = document.querySelector(html-quiz-btn);
var cssQuiz = document.querySelector(css-quiz-btn);
var randomQuiz = document.querySelector(random-quiz-btn);
var highscore = document.querySelector(highscore-btn);

// Overall function linked to html buttons for starting one of 4 quizzes
function quizJS() {

    // local variables
        // Function for countdown
        var countdown = function timer(event) {
            console.log(countdown);
        };

        // Function for timer during quiz; synced to scoring(move outside function?w/eventListener)
        var quizTimer = function score(event) {
            console.log(quizTimer);

            // function accessing high scores (move to score function, wherever it is?)
            function highScores() {
                console.log(scoreStorage);
                //access local storage and allow it to be displayed in browser
            };

            // Function for storing scores with name input available
            var scoreStorage = function storage() {
                console.log(scoreStorage);
            };
        };

        // Function for questions to cycle
        var questions = function cycle() {
            console.log(questions);

            // Function for question 1 (entails boolean with one correct answer and score addition)
            var question1 = function question1() {
                console.log(question1);
            };

            // Function for question 2 (give variables a value)
            var question2 = function question2() {
                console.log(question2);
            };

            // Function for question 3
            var question3 = function question3() {
                console.log(question3);
            };

            // Function for question 4
            var question4 = function question4() {
                console.log(question4);
            };
        };
};



// addeventlistener(click)
javaQuiz.addEventListener('click','');
htmlQuiz.addEventListener('click','');
cssQuiz.addEventListener('click','');
randomQuiz.addEventListener('click','');


