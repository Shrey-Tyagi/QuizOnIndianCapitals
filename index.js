import readlineSync from 'readline-sync';
import chalk from 'chalk';

var quizData = [ 
      {
      question: "What is the capitol of Jharkhand ?",
      answer: "Ranchi"
    },{
      question: "What is the capitol of Telangana ?",
      answer: "Hyderabad"
    },{
      question: "What is the capitol of Mizoram ?",
      answer: "Aizawl"
    },{
      question: "What is the capitol of Gujrat ?",
      answer: "Gandhinagar"
    },{
      question: "What is the capitol of Assam ?",
      answer: "Dispur"
    },{
      question: "What is the capitol of Andaman and Nicobar Islands ?",
      answer: "Portblair"
    }
  ];

var score = 0;
var level = 'Noob';
function welcome(){
    console.log(chalk.blue("Welcome! Get ready to test your knowelege of capitals of Indian states\n\n")
    + chalk.cyan("Each right answer gets you 3 points and each wrong answer reduces 1, you may skip the question by pressing enter")
    + chalk.red("\n---------------------------------------------------------")
  );
}

function game(){
    for (var quizObj of quizData) {
    var answerUser = readlineSync.question(quizObj.question);
    if (answerUser === '') {
      continue;
    }
    if (answerUser.toUpperCase() === quizObj.answer.toUpperCase()) {
      console.log(chalk.green("Good job! :)"));
      score++;
    } else {
      console.log(chalk.red("Better luck next time :("));
      score--;
    }
  }
}


function showScores(){
      if (score > 5) {
      level = 'Grandmaaster';
    } else if (score > 0 && score < 5) {
      level = 'Master';
    }
    console.log(chalk.red("---------------------------------------------------------"));
    console.log(chalk.blue("\nYAY! You SCORED: ") + chalk.green(score) + chalk.blue(" and your LEVEL is ") + chalk.green(level));
}


welcome();
game();
showScores();