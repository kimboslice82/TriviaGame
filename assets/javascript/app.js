window.onload = function() {
    var seconds = 10;
    var counter=setInterval(timer, 1000); 
    var deadline = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    
function stop() {
    //timer.stop(0);
}
    
function timer() {
    seconds--;
    document.getElementById("timer").innerHTML="0:" + seconds + " seconds"; 
    
  if (seconds === 0) {
     $("#timer").html("0:0");
     
  }
    
}
    
$("#done").click(function() {
    $("<div></div>").html("Correct Answers: " + correctAnswers);
    $("<div></div>").html("Incorrect Answers: " + incorrectAnswers);
    $("<div></div>").html("Unanswered: " + unanswered);
})
    

};