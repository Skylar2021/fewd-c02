// try catch syntax
'use strict'
//syntax
/*
async function name() {
	try {
    // statement
  	} catch(err) {
    // Catches any errors in the try block
	console.log(err)
  	}
}
*/
// apply
let answer = require('./promise_apply')


async function said(){
	try {
		console.log('Yo! Be with me?')
		answer.thinking()
		console.log(`I...um...${await answer.speakUp()}`)
	} catch (err){
		console.log(await err)
		console.log('Fine~ Try someone else!')
	}
}
said()