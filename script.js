var quizData = [
    {
      question: "1. What is JavaScript?",
      a: "JavaScript is a scripting language used to make the website interactive",
      b: "JavaScript is an assembly language used to make the website interactive",
      c: "JavaScript is a compiled language used to make the website interactive",
      d: "None of the above",
      correct: "a",
    },
    {
      question: "Which of the following is correct about JavaScript?",
      a: "JavaScript is an Object-Based language",
      b: "JavaScript is Assembly-language",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];
  
  var quiz = document.getElementById("quiz");
  var answerElements = document.querySelectorAll(".answer");
  var questionElement = document.getElementById("question");
  var a_text = document.getElementById("a_text");
  var b_text = document.getElementById("b_text");
  var c_text = document.getElementById("c_text");
  var d_text = document.getElementById("d_text");
  var submitButton = document.getElementById("submit");
  var name = prompt("Please enter your name.");
  
  var currentQuiz = 0;
  var score = 0;
  
  function deselectAnswers() {
    answerElements.forEach((answer) => (answer.checked = false));
}
  
  function getSelected() {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  function loadQuiz () {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
    loadQuiz();
  
  submitButton.addEventListener("click", () => {
    var answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>`
      }
    }
  });

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 / 2, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};

