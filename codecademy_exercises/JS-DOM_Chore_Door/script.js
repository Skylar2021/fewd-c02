'use strict'
const doorImage1 = document.querySelector('#door1')
const doorImage2 = document.querySelector('#door2')
const doorImage3 = document.querySelector('#door3')
const startButton = document.querySelector('#start')
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
// game
let numClosedDoors = 3;
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let openDoor1
let openDoor2
let openDoor3
let currentlyPlaying = true;


doorImage1.onclick = ()=>{
  if ( !isClicked(doorImage1) && currentlyPlaying){
  doorImage1.src = openDoor1
  playDoor(doorImage1)
  }
}
doorImage2.onclick = ()=>{  
  if ( !isClicked(doorImage2) && currentlyPlaying){
  doorImage2.src = openDoor2
  playDoor(doorImage2)
  }
}
doorImage3.onclick = ()=>{  
  if ( !isClicked(doorImage3) && currentlyPlaying){
  doorImage3.src = openDoor3
  playDoor(doorImage3)
  }
}

const startRound = () =>{
  
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good Luck!'
    currentlyPlaying = true;
    randomChoreDoorGenerator()
  
}
startButton.onclick = () =>{
  if(currentlyPlaying === false) startRound()
}
const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play again?'    
  } else {
    startButton.innerHTML = 'Game over! Play again?'    
  }
  return currentlyPlaying = false
}
const isBot = (door) => {
  if(door.src === botDoorPath){
    return true
  } else {
    return false
  }
  
}
const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false
  } else {
    return true
  }
}
const playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0){
    gameOver('win')
  } else if(isBot(door)){
    gameOver()
  }
}

const randomChoreDoorGenerator = () =>{
  let choreDoor = Math.floor(Math.random()*numClosedDoors) 
  if(choreDoor === 0){
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else if(choreDoor === 1){
    openDoor2 = botDoorPath
    openDoor3 = beachDoorPath
    openDoor1 = spaceDoorPath
  } else {
    openDoor3 = botDoorPath
    openDoor1 = beachDoorPath
    openDoor2 = spaceDoorPath
  }
}
// addEventListener()
// doorImage1.addEventListener('click', ()=>{})

randomChoreDoorGenerator()
