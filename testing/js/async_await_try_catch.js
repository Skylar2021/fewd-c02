// try catch syntax
'use strict'
//syntax
async function name() {
	try {
    // statement
  	} catch(err) {
    // Catches any errors in the try block
	console.log(err)
  	}
}

// trytry
let answer = require('./promise_apply')
answer = answer.speakUp()

async function said(){
	try {
		console.log('Yo! Be with me?')
		console.log(`um...I...um...${await answer}`)
	} catch (err){
		console.log(err)
		console.log('Fine~ Try someone else!')
	}
}
said()