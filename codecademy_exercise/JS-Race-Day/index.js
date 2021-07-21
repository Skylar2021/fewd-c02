let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let runnerAge = 19;

// checks whether the runner is an adult AND registered early and their race number
if (earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
  console.log(`For adult runner who registered early, your race number is ${raceNumber}.`)
} else if (!earlyRunner && runnerAge > 18) {
  console.log(`Runner is not an adult and registered early and your race number is ${raceNumber}.`)
}

//check age and registration time to determine race time and race number
if (earlyRunner && runnerAge > 18) {  
  console.log(`For runners over 18 who registered early, they will race at 9:30 am and ${raceNumber} is your race number.`)
} else if (!earlyRunner && runnerAge > 18){
  console.log(`For adult runner who did not register early they will race at 11:00am and ${raceNumber} is your race number.`)
} else if (earlyRunner && runnerAge < 18) {
  console.log(`Youth runners who registered early,race at 12:30 pm and ${raceNumber} is your race number.`)
} else if (!earlyRunner && runnerAge < 18) {
  console.log(`Youth runners who did not register early,race at 12:30 pm and ${raceNumber} is your race number.`)
} else {
  console.log('For runner who is exactly 18 years old, please approach the registration desk.')
}