var question1 = {
    title: 'What part of JavaScript represents a true or false statement?',
    answers: ['string', "array", "boolean", "alert"],
    correct: 2
}
var question2 = {
    title: 'What other program works in tandem with JavaScript to make functions easier to write?',
    answers: ['jquery', 'css', 'html', 'bootstrap'],
    correct: 0
}
var question3 = {
    title: 'How can you reference IDs in HTML through JavaScript?',
    answers: ['Functions', "EventListener", "call.class.html", "getElementByID"],
    correct: 3
}
var start = document.getElementByClass('.start-btn')
var timeleft = 60;
var seconds =
var countdown = setInterval(function() {
    if(timeleft <=0){
        alert('Time\'s up!')
    }
});

start.addEventListener('click', function(){
    var i = 0;
    setInterval(function() {
        ;  
}, 1000);
});

function displayQuestion(q) {
var qTitle = document.getElementById('q-title');
var answers = document.querySelectorAll('.answers');
qTitle.textContent = q.title;

answers.forEach(function(Element, index) {
    Element.textContent = q.answers[index]
console.log(answers)
});
}

displayQuestion(question1);