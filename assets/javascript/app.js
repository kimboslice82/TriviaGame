window.onload = function() {
    var questions = $("#question1", "#question2", "#question3");
    var correctAnswers = $("#answer3", "#answer4", "#answer8");
    var incorrectAnswers = $("#answer1", "#answer2", "#answer5", "#answer6", "#answer7");
    var unanswered = [];
    var userGuess = [];
    
    //the timer starts as soon as the page loads
    var timer = setInterval(function() {
        myTimer()
    }, 1000);
        var seconds = 45;

    function myTimer() {
        document.getElementById("timer").innerHTML = "0:" + seconds--; + "seconds";
    }


    
function gamePlay() {
   if (userGuess != correctAnswer) {
        incorrectAnswers++; 
       }
    else {
        correctAnswers++;
    }
}
    

};