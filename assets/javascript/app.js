var trivia2 = [
    {
        question:"How many eyes does a bee have?",
        options:["2","3","4","5"],
        correct:"5"
    },
    {
        question:"On average, what percentage of the body's energy does the brain use?",
        options:["10%","20%","30%","40%"],
        correct:"20%"
    },
    {
        question:"What is the fastest creature in the ocean?",
        options:["Mako Shark","Barracuda","Sailfish","Yellowfin Tuna"],
        correct:"Sailfish"
    },
    {
        question:"What is the technical term for a sword's handle?",
        options:["Hilt","Pommel","Tang","Grip"],
        correct:"Hilt"
    }
]

// var trivia = {

//         questions: {
//             q1: ["How many eyes does a bee have?","5", {
//                 a1: "2",
//                 a2: "3",
//                 a3: "4",
//                 a4: "5"
//             }], 
//             q2: ["On average, what percentage of the body's energy does the brain use?"],
//             q3: ["What is the fastest creature in the ocean?"],
//             q4: ["What is the technical term for a sword's handle?"]
//             }
//         };

//trivia.question.q1[1]
// var questionAnswers = {
//     a1: ["5"],
//     a2: ["20%"],
//     a3: ["Sailfish"],
//     a4: ["Hilt"]


//}

function createQuestions (){
    for(t = 0; t < trivia2.length; t++){
        // generating question htmkl here
        var questionHTML = "<div class='container'><div class='row'><div class='col-md-4'></div><h1 class='col-md-4'>";
        questionHTML += trivia2[t].question + "</h1><div class='col-md-4'></div></div><div class='row'><div class='col-md-5'></div><div class='col-md-2'>";

        for(o = 0; o < trivia2[t].options.length; o++){
            // generate option HTML here
        }

        document.querySelector("#questionContainer").innerHTML = questionHTML;
    }
}

function submitButtonClick(answer, correct){
    if (answer == correct){
        score += 1;
    }
}

var score = 0;

var questionIndex = 0;

var questionArr = [questions.q1, question.q2, question.q3, question.q4];

function renderQuestion() {
   
    if (questionIndex <= (questionsArr.length - 1)) {
      document.querySelector("#question").innerHTML = questionsArr[questionIndex][0];
    }
   
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArr.length;
    }
  }


