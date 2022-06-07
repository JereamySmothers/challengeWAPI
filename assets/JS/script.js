// code quiz

// implement a function where questions will be cycled through with 
// functions in of themselves; a button will initiate a countdown (function) 
// with a scoring function for high scores; include a game over and would you
// like to play again function.

// global variables (make an array?)
var javaQuiz = document.querySelector('#js-quiz-btn');
var highscore = document.querySelector('#highscore-btn');
var quizStart = document.querySelector('#start');
var questions1 = document.querySelector('#questions1');
var questions2 = document.querySelector('#questions2');
var questions3 = document.querySelector('#questions3');
var questions4 = document.querySelector('#questions4');
var questions5 = document.querySelector('#questions5');

var wrongMsg = document.querySelector('#wrong');
var quizTimer = 120;
var timer
var timerEl = document.createElement('div');
document.body.append(timerEl);
var index = 0
var submission = document.querySelector('#submit');

var questionArray = [{
    question: 'How do you link the html to the javascript doc?',
    choices: ['id', 'src', 'class', 'link'],
    answer: 'src',
}, {
    question: 'How do you access html elements through javascript?',
    choices: ['', 'choice2', 'choice3', 'choice4'],
    answer: 'choice1',
}, {
    question: 'question 3',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice4',
}, {
    question: 'question 4',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice2',
}, {
    question: 'question 5',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    answer: 'choice4',
}];

function displayQuestion1() {
    var question1 = document.querySelector('#question1');
    var button1Choice1 = document.querySelector('#choice1-1');
    var button1Choice2 = document.querySelector('#choice1-2');
    var button1Choice3 = document.querySelector('#choice1-3');
    var button1Choice4 = document.querySelector('#choice1-3');

    question1.textContent = questionArray[index].question;

    button1Choice1.textContent = questionArray[index].choices;
    button1Choice2.textContent = questionArray[index].choices;
    button1Choice3.textContent = questionArray[index].choices;
    button1Choice4.textContent = questionArray[index].choices;

};

// Overall function linked to html buttons for starting one of 5 questions
function quizPart1() {
    quizStart.classList.add('hide');
    questions1.classList.remove('hide');
    displayQuestion1()
    timer = setInterval(countdown, 1000);

};

function displayQuestion2() {
    var question2 = document.querySelector('#question2');
    var button2Choice1 = document.querySelector('#choice2-1');
    var button2Choice2 = document.querySelector('#choice2-2');
    var button2Choice3 = document.querySelector('#choice2-3');
    var button2Choice4 = document.querySelector('#choice2-3');

    question2.textContent = questionArray[index].question;

    button2Choice1.textContent = questionArray[index].choices;
    button2Choice2.textContent = questionArray[index].choices;
    button2Choice3.textContent = questionArray[index].choices;
    button2Choice4.textContent = questionArray[index].choices;

};

function quizPart2() {
    quizStart.classList.add('hide');
    questions2.classList.remove('hide');
    displayQuestion1()
    timer = setInterval(countdown, 1000);

};

function displayQuestion3() {
    var question3 = document.querySelector('#question3');
    var button3Choice1 = document.querySelector('#choice3-1');
    var button3Choice2 = document.querySelector('#choice3-2');
    var button3Choice3 = document.querySelector('#choice3-3');
    var button3Choice4 = document.querySelector('#choice3-3');

    question3.textContent = questionArray[index].question;

    button3Choice1.textContent = questionArray[index].choices;
    button3Choice2.textContent = questionArray[index].choices;
    button3Choice3.textContent = questionArray[index].choices;
    button3Choice4.textContent = questionArray[index].choices;

};

function displayQuestion4() {
    var question4 = document.querySelector('#question4');
    var button4Choice1 = document.querySelector('#choice4-1');
    var button4Choice2 = document.querySelector('#choice4-2');
    var button4Choice3 = document.querySelector('#choice4-3');
    var button4Choice4 = document.querySelector('#choice4-3');

    question4.textContent = questionArray[index].question;

    button4Choice1.textContent = questionArray[index].choices;
    button4Choice2.textContent = questionArray[index].choices;
    button4Choice3.textContent = questionArray[index].choices;
    button4Choice4.textContent = questionArray[index].choices;

};

function displayQuestion5() {
    var question5 = document.querySelector('#question5');
    var button5Choice1 = document.querySelector('#choice5-1');
    var button5Choice2 = document.querySelector('#choice5-2');
    var button5Choice3 = document.querySelector('#choice5-3');
    var button5Choice4 = document.querySelector('#choice5-3');

    question5.textContent = questionArray[index].question;

    button5Choice1.textContent = questionArray[index].choices;
    button5Choice2.textContent = questionArray[index].choices;
    button5Choice3.textContent = questionArray[index].choices;
    button5Choice4.textContent = questionArray[index].choices;

};

function countdown() {
    timerEl.textContent = quizTimer;
    quizTimer--;
    if (quizTimer <= 0) endGame();
};





// Function for timer during quiz; synced to scoring(move outside function?w/eventListener)
function score() {

    // Function for storing scores with name input available;
    var highScore = localStorage.getItem('highscore');
    if (highScore === null) {
        highScore = 0;
    };
};


//endgame function
function endGame() {

    clearInterval(timer);
};

function storage(event) {
    event.preventDefault();

};

// addeventlistener(click)
javaQuiz.addEventListener('click', quiz1);
highscore.addEventListener('click', storage);





