function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random]
}

function humanPlay() {
    playerSelection = prompt('Rock, paper or scissors?')
    return playerSelection.toLowerCase()
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!'
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'Computer wins!'
        } else {
            return 'Human wins!'
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'Human wins!'
        } else {
            return 'Computer wins!'
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Computer wins!'
        } else {
            return 'Human wins!'
        }
    }
}

function game() {
    let cpuScore = 0
    let playerScore = 0
    for (let i = 1; i < 6; i++) {
    alert(`Round ${i} begins!`);
    playerSelection = humanPlay()
    computerSelection = computerPlay()
    results = singleRound(playerSelection, computerSelection)
    if (results === 'Computer wins!') {
        cpuScore++
    } else if (results === 'Draw!') {
        playerScore = playerScore
        cpuScore = cpuScore
    } else {
        playerScore++
    }
    console.log(`Round ${i}: ${results}`)
    }
    if (cpuScore > playerScore) {
       return `Computer wins! Computer: ${cpuScore} points and Human: ${playerScore} points`
    } else {
        return `Human wins! Human: ${playerScore} points and Computer: ${cpuScore} points`
    }
}

gameScore = game();
console.log(gameScore);
