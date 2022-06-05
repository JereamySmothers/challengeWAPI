// code quiz

// implement a function where questions will be cycled through with 
// functions in of themselves; a button will initiate a countdown (function) 
// with a scoring function for high scores; include a game over and would you
// like to play again function.

// global variables (make an array?)
var javaQuiz = document.querySelector('#js-quiz-btn');
var highscore = document.querySelector('#highscore-btn');
var quizStart = document.querySelector('#start');
var questions = document.querySelector('#questions');
var question1 = document.querySelector('#question1');
var button1Choice1 = document.querySelector('#choice1-1');
var button1Choice2 = document.querySelector('#choice1-2');
var button1Choice3 = document.querySelector('#choice1-3');
var wrongMsg = document.querySelector('#wrong');
var quizTimer = 120;
var timer
var timerEl = document.createElement('div');
document.body.append(timerEl);
var index = 0

var questionArray = [{
    question:'question 1',
    choices:['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
},{
    question:'question 2',
    choices:['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
},{
    question:'question 3',
    choices:['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
},{
    question:'question 4',
    choices:['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
},{
    question:'question 5',
    choices:['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
}]

function displayQuestion() {
    question1.textContent = questionArray[index].question;

}

function countdown() {
    timerEl.textContent = quizTimer;
    quizTimer--;
    if (quizTimer <= 0) endGame();
}
// Overall function linked to html buttons for starting one of 4 quizzes
function quiz1() {
    quizStart.classList.add('hide');
    questions.classList.remove('hide');
    displayQuestion()
    // quiztimer function
     timer = setInterval( countdown, 1000);
    // local variables

    // Function for questions to cycle
    // function cycle() {

    //     // Function for question 1 (entails boolean with one correct answer and score addition)
    //     function question1() {


    //     };

    //     // Function for question 2 (give variables a value)
    //     function question2() {
    //         console.log(question2);

    //     };

    //     // Function for question 3
    //     function question3() {
    //         console.log(question3);

    //     };

    //     // Function for question 4
    //     function question4() {
    //         console.log(question4);

    //     };
    // };



};



// Function for timer during quiz; synced to scoring(move outside function?w/eventListener)
function score(quizTimer) {

    // Function for storing scores with name input available;
    var highScore = localStorage.getItem('highscore');
    if (highScore === null) {
        highScore = 0;
    };
};


//endgame function
function endgame() {

    clearInterval(timer);
};

function storage(event) {
    event.preventDefault();

    var scoreSheet = document.createElement('ol');
    // scoreSheet.textContent = 

};

// addeventlistener(click)
javaQuiz.addEventListener('click', quiz1);
highscore.addEventListener('click', storage);





