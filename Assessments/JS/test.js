"use strict"
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const hatNum = 1;

// field level easy, normal, hard or custom
const easyField = () =>{
	// let easy = new Field()
}
const normalField = () =>{
}
const hardField = () =>{
}
const customField = () =>{
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

// join arr into field
let arr =[
['*', '░', 'O', '░', 'O', 'O', '░'],
['O', '░', '░', '░', 'O', '░', 'O'],
['O', '░', 'O', '░', '░', '░', '░'],
['░', 'O', 'O', '░', 'O', '░', '░'],
['░', '^', '░', '░', '░', 'O', '░'],
]

const path = (dir) =>{
	

let newArr = []
arr.forEach(i => {
	newArr.push(i.join(''))
});
console.log(newArr.join('\n'))
}
