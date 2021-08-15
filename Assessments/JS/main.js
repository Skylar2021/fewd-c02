"use strict"
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const hatNum = 1;

class Field {
  constructor(){
	  this.field

  }
  print(){

  }
}

const myField = new Field([
	['*', '░', 'O'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

console.log(myField)




const playGame = () =>{

}
// randomfieldarea with different pattern

// path route 

// check the path isUsed 

// check isMeet hat || hole

// check go out of the field

// take userInput of the direction and show field after that
// '*' is visited marked
// game will end till user win, lose or attempting to move “outside” the field
// static method generateField()
const askReady = () =>{
  let userReady = prompt('Are you ready to find your hat?(yes or no): ', 'yes');
  userReady = userReady.toLocaleLowerCase();
  if (userReady === 'yes'){
    console.log("Let's get start!");
    selectField();
  } else if(userReady === 'no'){
    gameOver(false);
  } else{
    console.log('Please enter yes or no!');
    askReady();
  }
}

const selectField = () =>{
	let level = prompt('Pick a level(please enter easy, normal, hard or custom): ', 'normal')
	switch(level){ 
		case 'easy':
  			easyField();
			break;
		case 'normal':
			normalField();
			break;
		case 'hard':
			hardField();
			break;
		case 'custom':
			customField();
			break;
		default:
 		selectField();
	}
}


const gameOver = (status) => {
	if(status === true){
		console.log("Congratulations! You found the hat!")
	} else {
		console.log("Your hat is still waiting for you~")
	}  	
}



// askReady()







