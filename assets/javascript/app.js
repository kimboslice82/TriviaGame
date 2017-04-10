window.onload = function() {
    var questions = $("#question1", "#question2", "#question3");
    //var correctAnswers = [];
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
    
    
/*$("label" ).on( "click", function() {
  $( "correct-answers" ).html( $( "label:checked[value=correct]" ).val() + " is checked!" );
});*/

   
function setScore() {
   var score = $("input:radio[value=correct]").length;
  $("#correct-answers").text("Correct Answers: " + score);
    
}

// set score on input change
$("input").change(setScore);

// set score on initialization
setScore(); {
    console.log(setScore);
}

    

};