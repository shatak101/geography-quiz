//Quiz app to know your fundamental rights
var readlineSync = require("readline-sync");
const chalk = require('chalk');
const name=chalk.blueBright.bold;
var username= readlineSync.question("May I know your name? ")
console.log(name("Welcome " + username +  " lets play a quiz on Geography & Physical Features of India "));


var score=0;
const correct = chalk.green.bold;
const wrong = chalk.red.bold;
const heading=chalk.yellow.bold


var highScores = [
  {
    name: "Dinesh",
    score: 4,
  },

  {
    name: "Vishesh",
    score: 2,
  },
]


//function to check 
function play(ques,ans)
{
  var userans =readlineSync.question(ques)
  if(userans.toUpperCase()===ans.toUpperCase()) 
  {
    console.log(correct("You are right"))
  score=score+1
  }
  else{
  console.log(wrong("Wrong!!"))
  }
  console.log("Your current score is ", score);
  console.log("--------------")

}

//declaring array of objects and questions
var questions = [{
  questio: "What is the another name of Sahyadris?",
  answer: "Western Ghats"
}, {
  questio: "Which is the popular name of  the Indian islands in the Arabian Sea? ",
  answer: "Lakshadweep Islands"
},
{
  questio: "Which imaginary line almost divides India into two equal parts?",
  answer: "Tropic of Cancer"
},
{
  questio: "Which  river has the largest river basin in India?",
  answer: "Ganga"
},
{
  questio: "A landmass bounded by sea on three sides is referred to as",
  answer: "Peninsula"
},
{
  questio: "Which metal is responsible for the red colour of the red soil?",
  answer: "Iron"
},
]

//processing 


function game() {
  for (var i=0; i<questions.length; i++) {
    var presentQuestion = questions[i];
    play(presentQuestion.questio, presentQuestion.answer);
  }
}


function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if your score is higher congrats. Ping me and I'll update it");
  console.log("Answers are ")

  highScores.map(score => console.log(score.name, " : ", score.score))
}


game();
showScores();


