(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.querySelector("p");
let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.getElementById("userScore");
let computerScoreDisplay = document.getElementById("computerScore");
let Btn = document.getElementById("play-again");
Btn.style.display = "none";

function disableButtons(){
    let buttons = document.querySelectorAll("#rock, #paper, #scissors");
    buttons.forEach(function(button){
        button.disabled = true;
    });
}

function computer(){
    let output = Math.random();
    let choice = "";
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
        userScore++
        userScoreDisplay.textContent = "User Score: " + userScore
    }else{
        result.textContent = "Lose!, computer choosed: " + computerMove;
        computerScore++
        computerScoreDisplay.textContent = "PC Score: " + computerScore;
    }
    if(userScore === 10){
        return annouceWinner("User");
    } else if (computerScore === 10){
        return annouceWinner("Computer")
    }

    function annouceWinner(winner){
        let gameStatus = document.getElementById("gameStatus");
        let result = document.querySelector("p");
        let info = document.querySelector("h2")
        gameStatus.textContent = `Game over, winner is: ${winner}`
        result.style.display = "none";
        info.style.display = "none";
        disableButtons();
        Btn.style.display = "block"; 
    }
    return computerMove;
}

function playAgain() {
    userScore = 0; 
    computerScore = 0; 
    userScoreDisplay.textContent = "User Score: 0"; 
    computerScoreDisplay.textContent = "PC Score: 0";
    result.style.display = "block"; 
    result.textContent = "";
    document.getElementById("gameStatus").textContent = ""; 
    let buttons = document.querySelectorAll("button:not(#play-again)"); 
    buttons.forEach(function(button) {
        button.disabled = false; 
    });
    Btn.style.display = "none"; 
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
Btn.addEventListener("click", function(){
    playAgain();
})
},{}]},{},[1]);
