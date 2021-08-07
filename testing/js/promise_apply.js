// const arr = [['anson', 'yes'], ['candice', 'yes'], ['other', 'no']]
// let randomPerson = arr[i]

// const person = {
//   anson: 'yes',
//   candice: 'yes',
//   other: 'no'
// }

// const speakUp = (name) => {
  //  let respond = person.name    
  //   if (respond === 'yes') {return resolve};
  //   if (respond === 'no') {return reject};  
  // } 
  
const success = (resolve) => {
  console.log(resolve)
}
const fail = (reject) => {
  console.log(reject)
}

const speakUp = () => {
  let i = Math.floor(Math.random()*10);
  let respond = i > 5 ? 'yes' : 'no';
  return new Promise((resolve, reject) => {
    setTimeout( () => { 
      if (respond === 'yes') {resolve('Yes! Be couple!')};
      if (respond === 'no') {reject('No! We are friend.')};
      }, 1500)    
    }
  )
}

const speakUp2 = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout( () => { 
      let i = Math.floor(Math.random()*10);
      let respond = i > 5 ? 'Yes! Be couple!' : 'No! We are friend.';
      resolve(respond)
      }, 1500)    
    }
  )
}
speakUp2()

module.exports = speakUp2