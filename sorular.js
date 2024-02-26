const quizData = [
  {
    question:
      "1. Başlıyoruz. İstanbul'un nüfusu hakkında bir tahminin var mı? ?",
    a: "20 milyondan fazla",
    b: "14-16 milyon civarı",
    c: " 17-20 milyon arası ",
    d: "12-13 milyon civarı",
    correct: "b",
  },
  {
    question: "2. Peki hangi ada İstanbul'da değildir?",
    a: "Heybeliada",
    b: "Sedef Adası",
    c: "Marmara Adası",
    d: "Kınalıada",
    correct: "c",
  },
  {
    question: "3. Ayasofya’nın mimarı kimdir?",
    a: "Mimar Sinan",
    b: "Michelangelo",
    c: "İsidoros/ Anthemios",
    d: "I. Justiniaus",
    correct: "c",
  },
  {
    question: "4. Semtlere geçelim. Hangi İstanbul semti Anadolu yakasındadır?",
    a: "Aşiyan",
    b: "Ziverbey",
    c: "Bomonti",
    d: "Samatya",
    correct: "b",
  },
  {
    question: "5 – Aşağıdakilerden hangisi İstanbul’un opera binasıdır?",

    a: "Süreyya",
    b: "Kenter",
    c: "Ses",
    d: "BKM",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");

const b_text = document.getElementById("b_text");

const c_text = document.getElementById("c_text");

const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
            <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
            <button onclick="history.go(0)">Baştan Başla</button>  
            `;
    }
  }
});
