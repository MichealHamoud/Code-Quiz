var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var img = document.getElementById("img");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge")
var progress = document.getElementById("progress");
var scoreContainer = document.getElementById("scoreContainer");


let quiestion = [
    {
        question: "Commenly Used Data Types DO NOT include...",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C"
    },{ 
        question: "The condition in an if / else statement is enclosed with ________.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        correct: "C"
    },{ 
        question: "Arrys in JavaScript can be used to store ________.",
        choiceA: "numbers and strings",
        choiceB: "other arrys",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"
    },{ 
        question: "String values must be enclosed within ________ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "quotes",
        correct: "D"
    },{ 
        question: "A very useful toll used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correct: "D"
    },{ 
        question: "What does consol.log do?",
        choiceA: "outputs a message to the web console",
        choiceB: "makes a button to log a comment",
        choiceC: "logs information to the browser",
        choiceD: "all of the above",
        correct: "A"
    },{ 
        question: "What are JavaScript Data Types?.",
        choiceA: "number",
        choiceB: "string",
        choiceC: "boolean",
        choiceD: "object",
        correct: "D"
    },{ 
        question: "Which symbol is used for comments in Javascript?",
        choiceA: "//",
        choiceB: "/*",
        choiceC: "-",
        choiceD: "\\",
        correct: "B"
    },{ 
        question: "Which of the following is correct about Javascript?",
        choiceA: "JavaScript is an Object-Based language",
        choiceB: "JavaScript is Assembly-language",
        choiceC: "JavaScript is an Object-Oriented languag",
        choiceD: "JavaScript is a High-level languag",
        correct: "A"
    }
];

var lastQuestion = questions.Length - 1;
let runningQuestion = 0;

function renderQuestion(){
    let q = question[runningQuestion];

    question.innerHTML = "<p>"+q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderProgress(){
    for(let qIndex = 0; qindex <= lastQuestion; qindex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

start.addEventListener("click",startQuiz);
