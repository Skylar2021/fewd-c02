const answer = require('./promise_apply.js')


const thinking = () => {
  let arr = new Array(20).fill('um...')
  for (let i of arr){
    console.log(i)
  }
}

async function said() {
  console.log("I xyz you! Let's be couple!")
  thinking()
  let reply = await answer.speakUp()
  console.log(`My reply is ... ${reply}`)
}

said()