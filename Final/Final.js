//Tarin James
//CSE121b
//Summary: A quiz that fetches questions based on the users desired topic and difficulty.
//The correct answer is randomized throughout and a score is kept. The user can run the 
//quiz over and over again.


//global Variables
let apiData = "";
let questionCounter = 0;
let correctAnswers = 0;

function getUserInput() {
    //collects the user input from the html
    let topic = document.querySelector("#topic").value;
    let difficulty = document.querySelector("#difficulty").value;
    return [topic, difficulty];
};

function startQuiz() {
    //starts the quiz and fetches the API only if a topic and difficulty are selected
    const [topic, difficulty] = getUserInput();
    if (topic && difficulty){
        apiData = "";
        questionCounter = 0;
        correctAnswers = 0;
    // making url
    apiURL = `https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${difficulty}&type=multiple`;
    // make the url api call
    fetch(apiURL)           
    .then(response => response.json())
    .then(data => {
        apiData = data;
        questionDisplay();
    });    
    };    
};

function questionDisplay() {
    //randomizes and displays the answers into the html, stops after 10
    if (questionCounter < 10) {
        let question = apiData.results[questionCounter];
        document.querySelector("#question-text").innerHTML = question.question;
        let randomNumber = Math.floor(Math.random() * 4);
        let answers = question.incorrect_answers;
        answers.splice(randomNumber, 0, question.correct_answer);
        answerElementList = document.querySelectorAll(".answer");
        
        answerElementList.foreach((answerElement, index) => {
            answerElement.innerHTML = answers[index];
        });
    } 
    else { 
        // Quiz is completed
        document.querySelector("#question-text").innerHTML = `Quiz Completed! You got ${correctAnswers} out of 10 questions correct.`;
    }

    questionCounter += 1;

};

function selectAnswer(event) {
    //documents the users answer and if correct, adds to the global correctAnswers variable.
    const selectedAnswer = event.target.innerHTML;
    const question = apiData.results[questionCounter - 1];
    if (selectedAnswer === question.correct_answer) {
        correctAnswers += 1;
    }
    questionDisplay();
};



