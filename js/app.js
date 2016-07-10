var questions = [
{

title: 'Who composed the music for The Nutcracker?',
answers: ['Bach', 'Mozart', 'Tchaikovsky', 'Beethoven'],
correctAnswer: [2]

/*title: 'In the first act who damages the Nutcracker?',
answers: ['Clara', 'Fritz', 'Heir Drosselmeyer' 'The Rat King'],
correctAnswer: [1]*/

/*title: 'In the battle scene who defeats the Rat King?',
answers: ['The Prince', 'A Toy Soldier', 'Clara', 'He is not defeated'],
correctAnswer: [2]*/

/*title: 'Who greets Clara and The Prince and welcomes them to the Land of the Sweets?'
answers: ['The Snow Queen', 'The Arabian Lead', 'The Dew Drop Fairy' 'The Sugar Plum Fairy']
correctAnswer: [3]*/

/*title: 'Who dances the Pas de Deux at the end of the second act?',
answers: ['Clara and The Prince', 'Sugar Plum Fairy and The Cavalier', 'The Harlequin Doll and the Toy Soldier', 'Heir Drosselmeyer and The Maid'],
correctAnswer: [2]*/

},

];

console.log(questions)

questions.forEach(function(question) {
  var $page = $('.question-page');
  
  $page.find('.title').text(question.title);
  var $answers = $page.find('.answers');
  question.answers.forEach(function(answer, index) {
    $answers.append('<li><input type="radio" name="answer" value="' + index + '" />' + answer + '</li>');
  });
});