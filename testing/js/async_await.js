const answer = require('./promise_apply.js')




async function said() {
  console.log("I xyz you! Let's be couple!")
  answer.thinking()
  let reply = await answer.speakUp()
  console.log(`My reply is ... ${reply}`)
}

said().catch((reject) => {
  console.log(reject)
  
})