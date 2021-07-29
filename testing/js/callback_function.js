// simple callback function
function action(callFunction) {
  callFunction()
}

function greeting() {
  
  console.log('Hi!')
}

action(greeting)

// callback function with if statament
function action(callFunction) {
  
  if(callFunction === count) {
    callFunction(1)
  } else if (callFunction === greeting) {
    callFunction('Amy')
  }  
}

function greeting(name) {  
  console.log('Yo! ' + name)
}

function count(num) {
  console.log(num + num)  
}

action(count) // input count or greeting to ()

setTimeout(greeting, 200, 'you do it') // apply bult-in method in window