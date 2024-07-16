const questions = [
    {
        question : "Which is largest animal in the world",
        answers: [
         {text:"shark",correct:false} , 
         {text:"blue whele",correct:true}  ,
           {text:"elephant",correct:false} , 
           {text:"Girafe",correct:false} , 
        ]

    },
    {
        question : "what is my school name",
        answers: [
         {text:" om public",correct:false} , 
         {text:"kr public",correct:false}  ,
           {text:"brilliant academy",correct:true} , 
           {text:"Girafe",correct:false} , 
        ]

    },
    {
        question : "diksha kon hai",
        answers: [
         {text:"shark",correct:false} , 
         {text:"pagal",correct:true}  ,
           {text:"inteligrnt",correct:false} , 
           {text:"Girafe",correct:false} , 
        ]

    },
    {
        question : "Which is largest animal in the world",
        answers: [
         {text:"shark",correct:false} , 
         {text:"blue whele",correct:true}  ,
           {text:"elephant",correct:false} , 
           {text:"Girafe",correct:false} , 
        ]

    },
    {
        question : "Which is largest animal in the world",
        answers: [
         {text:"shark",correct:false} , 
         {text:"blue whele",correct:true}  ,
           {text:"elephant",correct:false} , 
           {text:"Girafe",correct:false} , 
        ]

    },
    
    
      

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0 ;
function startQuiz(){
     currentQuestionIndex = 0;
    score = 0 ;
    nextButton.innerHTML = "Next ";
    showQuestion();
    
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    currentQuestion.answers.forEach(answer =>
    {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    } 
    );
}
function resetState(){
    nextButton.style.display = "none";
    while( answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
    
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true" ){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display = "block";
} 
function showScore(){
    resetState();
    questionElement.innerHTML = 'you score ${score} out of ${question.length}';
nextButton.innerHTML = "play Again";
nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",() =>
    {
        if(currentQuestionIndex < questions.length)
        {
            handleNextButton();
        }
        else{

            startQuiz();
        }
    });

/*
    
    function showScore(){
        resetState();
        questionElement.innerHTML = 'you score ${score} out of ${question.length}';
nextButton.innerHTML = "play Again";
nextButton.style.display = "block";
    }

    
        }
        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQestionIndex<questionElement.length)
            {
                showQuestion();
            }
            else{
                showScore();
            }
        }
    

        nextButton.addEventListener("click",() =>
        {
            if(currentquestionIndex<question.length)
            {
                handleNextbutton();
            }
            else{

            }
        
        )*/
       
startQuiz();
