const log = console.log
// const arr = [['anson', 'yes'], ['candice', 'yes'], ['other', 'no']]
// let randomPerson = arr[i]

// const person = {
//   anson: 'yes',
//   candice: 'yes',
//   other: 'no'
// }

let i = Math.floor(Math.random()*10);


let respond = i >5 ? 'yes' : 'no';



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

const speakUp = (respond) => {
  return new Promise((resolve, reject)=>{
    console.log('Be my boy/girl friend!')
    setTimeout(()=>{log('.')}, 250)
    setTimeout(()=>{log('.')}, 500)
    setTimeout(()=>{log('.')}, 1000)
    setTimeout(()=>{log('.')}, 1500)
    setTimeout(()=>{log('.')}, 2000)
    setTimeout(()=>{log('.')}, 2500)
    setTimeout( () => { 
      if (respond === 'yes') {resolve('Yes~ We are couple now.')};
      if (respond === 'no') {reject('No!You are in my friend zone.')};
      }, 3000)    
    }
  )
}
  
speakUp(respond).then(success).catch(fail)

