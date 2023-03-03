// quiz questions
var questions = [
{
    title: 'What part of JavaScript represents a true or false statement?',
    answers: ['string', "array", "boolean", "alert"],
    correct: 2
},

{
    title: 'What other program works in tandem with JavaScript to make functions easier to write?',
    answers: ['jquery', 'css', 'html', 'bootstrap'],
    correct: 0
},

{
    title: 'How can you reference IDs in HTML through JavaScript?',
    answers: ['Functions', "EventListener", "call.class.html", "getElementByID"],
    correct: 3
}];

let timerIntervalId;
let score = 0;
let timeLeft = 60;
let countdownTimer = 0;
let currentQuestion = 0;

// DOM Elements
const startBtn = $('#start-btn');
const quizContainer = $('#quiz-container');
const questionEl = $('.questions');
const answersEl = $('#answers');
const timerEl = $('#timer');
const scoreEl = $('#score');
const initialsForm = $('#initials-form');
const initialsInput = $('#initials')

// Start quiz
function startQuiz() {
    currentQuestion = 0;
    timeLeft = 60;
    score = 0;
    timerIntervalId = setInterval(updateTimer, 1000);
    showQuestion();
};
// updates timer
function updateTimer() {
    timeLeft--;
    timerEl.text(timeLeft);
    if (timeLeft <= 0) {
        endQuiz();
    }
};

// display question
 function showQuestion() {
    const question = questions[currentQuestion];
    $('.questions h2').text(question.title);
    $('#answers').empty();
    for (let i = 0; i <question.answers.length; i++) {
        const answerBtn = $('<button>');
        answerBtn.text(question.answers[i]);
        answerBtn.click(handleAnswerClick);
        answersEl.append(answerBtn);
    };
};

// handle answer click
function handleAnswerClick(event) {
const selectedAnswer = $(this).text();
const question = questions[currentQuestion];
if (selectedAnswer === question.answers[question.correct]) {
    currentQuestion++;
} else {
    timeLeft -= 10;
};
if (currentQuestion === questions.length || timeLeft <= 0) {
    endQuiz();
} else {
    showQuestion();
};
};

// End Quiz
function endQuiz() {
    clearInterval(timerIntervalId);
    $('.questions').addClass('hide-question-answers');
    $('score-container').addClass('show-score');
    $('.score').text('Your Score is:' + score);
};


// Event Listeners
startBtn.click(startQuiz);