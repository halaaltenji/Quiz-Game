
const quizData = [
    {
        question: "what is the capital of france",
        options: ["paris", "london", "madrid", "berlin"],
        answer: 0,
    },
    {
        question: "what is the largest country in the world",
        options: ["canada", "china", "russia", "usa"],
        answer: 2,
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Dollar", "Euro"],
        answer: 1,
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Mount Everest", "Makalu", "Dhaulagiri"],
        answer: 1,
    },
    {
        question: "What is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        answer: 3,
    },
];

const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll(".options .option");
const scoreElement = document.querySelector("#score");

let questionIndex = 0;
let score = 0;
function setQuestion() {
    const currentQuestion = quizData[questionIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionElements.forEach((optionElement, index) => {
        optionElement.innerHTML = currentQuestion.options[index];
    });
}


function checkAnswer(optionIndex) {
    const currentQuestion = quizData[questionIndex];
    if (optionIndex === currentQuestion.answer) {
        score++;
    }
    questionIndex++;
    if (questionIndex< quizData.length) {
        setQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.style.display = "none";
    optionElements.forEach((optionElement) => {
        optionElement.style.display = "none";
    });
    scoreElement.innerHTML = `You got ${score} out of ${quizData.length} correct!`;
    scoreElement.style.display = "block";
}

optionElements.forEach((optionElement, index) => {
    optionElement.addEventListener("click", () => {
        checkAnswer(index);
    });
});

setQuestion();
