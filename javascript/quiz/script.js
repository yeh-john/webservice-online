const quizData = [
    {
        question: "What is linux root defalut password?",
        a: "passwd",
        b: "root",
        c: "linux",
        d: "1234",
        correct: "d",
    },
    {
        question: "What is linux root defalut password?",
        a: "passwd",
        b: "root",
        c: "linux",
        d: "1234",
        correct: "d",
    },
    {
        question: "What is linux root defalut password?",
        a: "passwd",
        b: "root",
        c: "linux",
        d: "1234",
        correct: "d",
    },
    {
        question: "What is linux root defalut password?",
        a: "passwd",
        b: "root",
        c: "linux",
        d: "1234",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
// const text
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
let num = 1;

loadQuiz();

function loadQuiz(){
    deselectAns();
    
    const currentQuizData  = quizData[currentQuiz];
    
    questionEl.innerText = num+"."+currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};



function deselectAns(){
    answerEls.forEach(answerEl => answerEl.checked = false);
};


function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id;
        }
    })
    return answer;
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        num ++
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML =`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button class="reloadBtn" onclick="location.reload()">Restart questions</button>
            `
        }
        
    }
})