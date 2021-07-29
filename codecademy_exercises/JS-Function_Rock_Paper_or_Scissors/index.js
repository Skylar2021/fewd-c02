// user choice 
const getUserChoice = userInput => {
  input = userInput.toLowerCase();
  if (input === 'rock' || input === 'paper' || input ==='scissors' || input === 'bomb') {
    return input;
  } 
  else {
    console.log('invalid input!')
  }
}

// computer choice
const getComputerChoice = () => {
 i = Math.floor(Math.random()*3);
 switch (i) {
   case 0:
     return 'rock';
     break;
   case 1:
     return 'paper';
     break;
   case 2:
     return 'scissors';
     break;
 }
}

// determine the winner
const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === computerChoice) {
   return 'The game is tie.';
 } else if(userChoice === 'rock' && computerChoice === 'scissors' || 
   userChoice === 'paper' && computerChoice === 'rock' || 
   userChoice === 'scissors' && computerChoice === 'paper' ||
   userChoice === 'bomb'
   ) {
   return 'User Won!';
 } else if(computerChoice === 'rock' && userChoice === 'scissors' || 
   computerChoice === 'paper' && userChoice === 'rock' || 
   computerChoice === 'scissors' && userChoice === 'paper') {
   return 'Computer Won!';
 } 
}

determineWinner()

// start the game and log the results
const playGame = () => {
 let userChoice = getUserChoice('bomb');
 let computerChoice = getComputerChoice();
 console.log(`user: ${userChoice}`);
 console.log(`computer: ${computerChoice}`);
 console.log(determineWinner(userChoice, computerChoice))
}

playGame()
