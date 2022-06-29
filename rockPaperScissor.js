const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissor' || userInput === 'paper') {
    return userInput;
  } else {
    console.log('ERROR: Please type: rock, scissor or paper');
  }
}

var getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random () * 3);
 switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
 }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie Game!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      return 'Sorry, Computer Won';
  } else {
    return 'Congrats, You Won!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissor')
      return 'Sorry, Computer Won';
  } else {
    return 'Congrats, You Won!';
  }
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock')
      return 'Sorry, Computer Won'
  } else {
    return 'Congrats, You Won!'
  }
}


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice ();
  console.log(`You threw ${userChoice} and The Computer threw ${computerChoice}`)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()



