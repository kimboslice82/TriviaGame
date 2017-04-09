window.onload = function() {
    
    var counter=setInterval(timer, 1000); 
    var deadline = 0;
    var correctAnswers = $("#option3", "#option4", "#option8");
    var incorrectAnswers = [];
    var unanswered = [];
    var userGuess = [];
    

    var timer = setInterval(function() {
        myTimer()
    }, 1000);
        var seconds = 45;

    function myTimer() {
        document.getElementById("timer").innerHTML = "0:" + seconds--; + "seconds";
    }


    
/*function gamePlay() {
   if (userGuess != correctAnswer) {
        incorrectAnswers++; 
       }
    else {
        correctAnswers++;
    }
}*/
    

};