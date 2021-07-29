// determining how many hours of sleep you got each night of the week
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 6; 
    case 'tuesday':
      return 7; 
    case 'wednesday':
      return 7; 
    case 'thursday':
      return 7; 
    case 'friday':
      return 9; 
    case 'satursday':
      return 10; 
    case 'sunday':
      return 9; 
  }
}

// Get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  return sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('satursday') + getSleepHours('sunday');
}

// get the ideal sleep hours that you prefer
const getIdealSleepHours = idealHours => {
  return (idealHours * 7);
}

// sleep debt calculate
const calculateSleepDebt = () => {
  const idealHours = 8
  if(
    getActualSleepHours() === getIdealSleepHours(idealHours)) {
    console.log('You got the perfect amount of sleep.')
  } 
  else if(
    getActualSleepHours() > getIdealSleepHours(idealHours)) {
    console.log('You sleep ' + (getActualSleepHours() - getIdealSleepHours(idealHours)) + ' hours over your ideal sleep time. You got more sleep than needed.')
  }
  else {
    console.log('You sleep ' + (getIdealSleepHours(idealHours) - getActualSleepHours()) + ' hours less your ideal sleep time.You should get some rest.')
  }
}
calculateSleepDebt()