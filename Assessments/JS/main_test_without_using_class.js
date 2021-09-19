"use strict"
const prompt = require('prompt-sync')({sigint: true});
const hat = '^';
const hole = 'O';
const fieldChar = '░';
const pathChar = '*';
const Instruction = 'Instruction:\nW for going up\nS for going down\nA for going left\nD for going right\nPlease choose a direction and press enter.\n-------'

let newArr = [[]];
let currentRow = 0;
let currentCol = 0;
let fieldCol = 10
let fieldRow = 6
let holeProb
// let countHole = 0;
let field =[]

// generate a random starting from 2
const getRandomNum = (num) =>{
    let positionNum = Math.floor(Math.random()*num)
    while(positionNum <= 1){
        positionNum = Math.floor(Math.random()*num)
    } 
    return positionNum    
}

// generate a random Field
const generateField = (row, col, prob) =>{
    let hatRow = getRandomNum(row)
    let hatCol = getRandomNum(col)    
    // let maxHoleNum = Math.floor(row*col*prob)
    field = new Array(row).fill('░').map(item => new Array(col))
    for(let i = 0; i < row ; i++){        
        for(let j = 0; j < col ; j++){ 
            if (i === 0 && j === 0){
                // set start point 
                field[i][j] = pathChar;
            } else if(i === hatRow && j === hatCol){
                 // set Hat Position 
                field[i][j] = hat
            } else{
                console.log()
                field[i][j]= Math.random()*1.1 >= prob ? '░' : 'O';
                // if(field[i][j] === 'O' && countHole <= maxHoleNum){
                //     countHole++
                // } else if(field[i][j] === 'O' && countHole >= maxHoleNum){
                //     return field[i][j] = '░';
                // } else {
                    // return field[i][j] = '░'
                }
        }
    }    
    return field
}


// user select a level( easy, normal, hard)
const customField = () =>{
    let input = prompt('Easy: 1\nNormal: 2\nDifficult: 3\nPlease select a level then press enter:', 2)
    let option = parseInt(input)    
    if(option === 1){
        fieldCol = 10
        fieldRow = 6
        holeProb = 0.1
        generateField(fieldRow,fieldCol,holeProb)
        takeUserInput()  
    } else if(option === 2){
        fieldCol = 10
        fieldRow = 6
        holeProb = 0.3
        generateField(fieldRow,fieldCol,holeProb)
        takeUserInput() 
    } else if(option === 3){
        fieldCol = 12
        fieldRow = 8
        holeProb = 0.4
        generateField(fieldRow,fieldCol,holeProb)
        takeUserInput() 
    } else{
        console.log('Cannot read your input. Default level mode on...')
        fieldCol = 10
        fieldRow = 6
        holeProb = 0.3
        generateField(fieldRow,fieldCol,holeProb)
        takeUserInput() 
    }
}

// print out field
const print = (field) =>{    
	field.forEach(i => {newArr.push(i.join(''))});
    newArr = newArr.join('\n')
    console.clear()
	console.log(newArr)
    newArr = [[]]

}
// check out of boundary 
const isOutBoundary = (row, col)=>{
    if (row < 0 || col < 0 || row > (field.length) || col > (field[0].length-1)){
        return true
    } else{
        return false
    }
}
// validate input and alter user position
const takeUserInput = () =>{
    console.log(Instruction)
    print(field)
	let askDirection = prompt('Which direction?')
    askDirection = askDirection.toUpperCase()
    switch(askDirection){
        case 'W':
            currentRow-=1;
            currentCol;
            if(isOutBoundary(currentRow, currentCol))  {
                console.log('You are out of boundary')
                gameOver(false)
            } else{ 
                checkUserInput(currentRow, currentCol)
            };
            break;
        case 'S':
            currentRow+=1;
            currentCol;
            if(isOutBoundary(currentRow, currentCol))  {
                console.log('You are out of boundary')
                gameOver(false)
            } else{ 
                checkUserInput(currentRow, currentCol)
            };
            break;
        case 'A':
            currentRow;
            currentCol-=1;
            if(isOutBoundary(currentRow, currentCol))  {
                console.log('You are out of boundary')
                gameOver(false)
            } else{ 
                checkUserInput(currentRow, currentCol)
            };
            break;
        case 'D':
            currentRow;
            currentCol+=1;
            if(isOutBoundary(currentRow, currentCol))  {
                console.log('You are out of boundary')
                gameOver(false)
            } else{ 
                checkUserInput(currentRow, currentCol)
            };
            break;
        default:
            console.log('***Please enter W, S, A or D***');
            takeUserInput()             
    }		
}

// check user position is on hole/ hat/ pathChar
const checkUserInput = (row, col) => {
    let position = field[row][col]    
    if (position == hole){
        console.log(`You fall in the hole.`)
        gameOver(false)
    } 
    else if(position == hat){
        gameOver(true)
    } else if(position == pathChar){
        console.log('Don\'t turn back!')
        gameOver(false)
    }
    else{
        renewField(row, col)        
    }
}
// renew field
const renewField = (row, col) =>{
    field[row][col] = '*';
    takeUserInput()    
}
// end game greeting
const gameOver = (status) => {
    if(status === true){
        console.log("Congratulations! You found the hat!")
        currentCol = 0
        currentRow = 0
        // countHole = 0
	} else {
        console.log("Your hat is still waiting for you~")
        currentCol = 0
        currentRow = 0
        // countHole = 0
	}  	
}
// takeUserInput()
// generateField(8, 18, 0.4)
customField()
