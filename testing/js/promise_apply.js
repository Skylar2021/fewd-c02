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

const thinking = () => {
  let arr = new Array(20).fill('um...')
  for (let i of arr){
    console.log(i)
  }
}

const speakUp = () => {
  let i = Math.floor(Math.random()*10);
  let respond = i > 5 ? 'yes' : 'no';
  return new Promise((resolve, reject) => {
    setTimeout( () => { 
      if (respond === 'yes') {
        resolve('Yes! Be couple!')
    }
      else {
        reject('No! We are friend.')};
      }, 1500)    
    }
  )
}

const speakUp2 = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout( () => { 
      let i = Math.floor(Math.random()*10);
      let respond = i > 5 ? resolve('Yes! Be couple!') : reject('No! We are friend.');
      
      }, 1500)    
    }
  )
}


module.exports = {speakUp, speakUp2, thinking}