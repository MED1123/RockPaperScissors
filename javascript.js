let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.querySelector("p");
function computer(){
    let output = Math.random();
    let = choice = "";
    if(output >= 0 && output<1/3){
        choice = "rock";
    }else if(output >= 1/3 && output < 2/3){
        choice = "paper";
    }else if(output >= 2/3 && output < 1){
        choice = "scissors";
    }
    return choice;
}

function play(userMove){
    let computerMove = computer();
    if(userMove === computerMove) {
        result.textContent = "Draw, computer choosed: " + computerMove;
    }else if(userMove === "rock" && computerMove === "scissors" || userMove === "paper" && computerMove === "rock" || userMove === "scissors" && computerMove === "paper"){
        result.textContent = "Win!, computer choosed: " + computerMove;
    }else{
        result.textContent = "Lose!, computer choosed: " + computerMove;
    }
    return computerMove;
}

rock.addEventListener("click", function(){
    play("rock");
})
paper.addEventListener("click", function(){
    play("paper");
})
scissors.addEventListener("click", function(){
    play("scissors");
})