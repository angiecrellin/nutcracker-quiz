var questions = [
{

title: 'Who composed the music for The Nutcracker?',
answers: ['Bach', 'Mozart', 'Tchaikovsky', 'Beethoven'],
correctAnswer: 2
},

{
title: 'In the first act who damages the Nutcracker?',
answers: ['Clara', 'Fritz', 'Heir Drosselmeyer', 'The Rat King'],
correctAnswer: 1
},

{
title: 'In the battle scene who defeats the Rat King?',
answers: ['The Prince', 'A Toy Soldier', 'Clara', 'He is not defeated'],
correctAnswer: 2
},

{
title: 'Who greets Clara and The Prince and welcomes them to the Land of the Sweets?',
answers: ['The Snow Queen', 'The Arabian Lead', 'The Dew Drop Fairy', 'The Sugar Plum Fairy'],
correctAnswer: 3
},

{
title: 'Who dances the Pas de Deux at the end of the second act?',
answers: ['Clara and The Prince', 'Sugar Plum Fairy and The Cavalier', 'The Harlequin Doll and the Toy Soldier', 'Heir Drosselmeyer and The Maid'],
correctAnswer: 1

},

];

console.log(questions)
var currentQuestion = -1
var totalScore = 0

function nextQuestion() {
  currentQuestion ++
  if (currentQuestion == questions.length){
  	showResults()
  	return
  }
  var question = questions[currentQuestion]
  var 	$page = $('.question-page');
  		$page.find('.title').text(question.title);
  var $answers = $page.find('.answers');
  	$answers.empty()
  		question.answers.forEach(function(answer, index) {
    	$answers.append('<li><input type ="radio" name ="answer" value="' + index + '" required />' + answer + '</li>');
  })
}

/*function inBetweenAnswers() {
  var question = questions[currentQuestion]
  var guess = $('.answers').find('input:checked').val()
      $('.results').show();
    if (Number(guess) === question.correctAnser){
      $('.results').text("Good Job!");
    }
    else {
      $('.results').text('Oops! Try Again.');
    }
  }*/


nextQuestion();

$('.question-page').on('submit', function(event){
	event.preventDefault()
	scoreQuestion();
  //inBetweenAnswers();
	nextQuestion();

})

function showResults(){
  $('.results').find('.correct').text(totalScore)
  $('.results').find('.total').text(questions.length)
	$('.results').show()

}
function scoreQuestion(){
	var question = questions[currentQuestion]
	var guess = $('.answers').find('input:checked').val()
	if (Number(guess) === question.correctAnswer){
		totalScore ++
	} 


}

/*function restartQuiz() {
  var = currentQuestion = -1
  var = totalScore = 0

}
$('.restart').click(restartQuiz)*/




















