var questions = [{

        title: 'Who composed the music for The Nutcracker?',
        answers: ['Bach', 'Mozart', 'Tchaikovsky', 'Beethoven'],
        questionNumber: '1 of 5',
        correctAnswer: 2
    },

    {
        title: 'In the first act who damages the Nutcracker?',
        answers: ['Clara', 'Fritz', 'Heir Drosselmeyer', 'The Rat King'],
        questionNumber: '2 of 5',
        correctAnswer: 1
    },

    {
        title: 'In the battle scene who defeats the Rat King?',
        answers: ['The Prince', 'A Toy Soldier', 'Clara', 'He is not defeated'],
        questionNumber: '3 of 5',
        correctAnswer: 2
    },

    {
        title: 'Who greets Clara and The Prince and welcomes them to the Land of the Sweets?',
        answers: ['The Snow Queen', 'The Arabian Lead', 'The Dew Drop Fairy', 'The Sugar Plum Fairy'],
        questionNumber: '4 of 5',
        correctAnswer: 3
    },

    {
        title: 'Who dances the Pas de Deux at the end of the second act?',
        answers: ['Clara and The Prince', 'Sugar Plum Fairy and The Cavalier', 'The Harlequin Doll and the Toy Soldier', 'Heir Drosselmeyer and The Maid'],
        questionNumber: '5 of 5',
        correctAnswer: 1

    },

];

console.log(questions)
var currentQuestion = -1
var totalScore = 0

function nextQuestion() {
    currentQuestion++
    if (currentQuestion == questions.length) {
        showResults()
        return
    }
    var question = questions[currentQuestion]
    var $page = $('.question-page');
    $page.find('.title').text(question.title);
    var $answers = $page.find('.answers');
    $answers.empty()
    question.answers.forEach(function(answer, index) {
        $answers.append('<li><input type ="radio" name ="answer" value="' + index + '" required />' + answer + '</li>');
        $page.find('.questionNumber').text(question.questionNumber);

    })
}

function inBetweenAnswers() {
    var question = questions[currentQuestion]
    var guess = $('.answers').find('input:checked').val()
    if (Number(guess) == question.correctAnswer) {
        $('.results').text("Good Job!");
    } else {
        $('.results').text('Oops! Try Again.');

    }
    $('.results').show();
    setTimeout(function() {
        $('.results').hide();
        nextQuestion();


    }, 3000)
}

//show first question on page load
nextQuestion();

$('.question-page').on('submit', function(event) {
    event.preventDefault()
    scoreQuestion();
    inBetweenAnswers();


})

function showResults() {

    var text = 'Congratulations you got  ' + totalScore + ' out of ' + questions.length + ' correct!<br>You\'re ready for the ballet!'
    $('.results').show()
    $('.results').html(text)

}

function scoreQuestion() {
    var question = questions[currentQuestion]
    var guess = $('.answers').find('input:checked').val()
    if (Number(guess) === question.correctAnswer) {
        totalScore++
    }


}

function restartQuiz() {
    currentQuestion = -1
    totalScore = 0
    $('.results').hide()
    nextQuestion();
}

$('.restart').click(restartQuiz)
