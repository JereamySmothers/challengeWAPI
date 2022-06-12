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

var wrongMsg = document.querySelector('#wrong');
var quizTimer = 120;
var timer
var timerEl = document.createElement('div');
document.body.append(timerEl);
var index = 0
var submission = document.querySelector('#submit');
var input = document.querySelector('#inputSelect');
var button = document.querySelector('#buttonSelect');
var rankings =  document.querySelector('#leaderboardPost');
var listedRanking =  document.querySelector('#listings');

var questionArray = [{
    question: 'How do you link the html to the javascript doc?',
    choices: ['id', 'src', 'class', 'link'],
    answer: 'src',
}, {
    question: 'How do you access html elements through javascript?',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
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

var leaderBoard = [];



function displayQuestion1() {
    var question1 = document.querySelector('#question1');
    var button1Choice1 = document.querySelector('#choice1-1');
    var button1Choice2 = document.querySelector('#choice1-2');
    var button1Choice3 = document.querySelector('#choice1-3');
    var button1Choice4 = document.querySelector('#choice1-4');

    question1.textContent = questionArray[index].question;

    button1Choice1.textContent = questionArray[index].choices[0];
    button1Choice2.textContent = questionArray[index].choices[1];
    button1Choice3.textContent = questionArray[index].choices[2];
    button1Choice4.textContent = questionArray[index].choices[3];
    
    button1Choice1.addEventListener('click', nextQuestion);
    button1Choice2.addEventListener('click', nextQuestion);
    button1Choice3.addEventListener('click', nextQuestion);
    button1Choice4.addEventListener('click', nextQuestion);
};

function nextQuestion() {
    index++;
    if (index < questionArray.length) {
        displayQuestion1();
    } else {
        clearInterval(timer);
        submission.classList.remove('hide');
        questions1.classList.add('hide');
        
        score();
    };
};

// Overall function linked to html buttons for starting one of 5 questions
function quizPart1() {
    quizStart.classList.add('hide');
    questions1.classList.remove('hide');
    displayQuestion1();
    timer = setInterval(countdown, 1000);

};

function countdown() {
    timerEl.textContent = quizTimer;
    quizTimer--;
    if (quizTimer <= 0) endGame();
};

// Function for timer during quiz; synced to scoring(move outside function?w/eventListener)
function score() {

    // Function for storing scores with name input available;
    var highScore = localStorage.getItem('leaderboard');
    if (highScore === null) {
        highScore = 0;
    };
};

function saveInitial() {
    leaderBoard.push({initial: input.value, score: quizTimer});
    localStorage.setItem('leaderboard', JSON.stringify(leaderBoard));
    rankings.classList.remove('hide');
    submission.classList.add('hide');
};

//endgame function
function endGame() {

    clearInterval(timer);
};

function storage(event) {
    event.preventDefault();

};

// addeventlistener(click)
javaQuiz.addEventListener('click', quizPart1);
highscore.addEventListener('click', storage);
button.addEventListener('click', saveInitial);





