// create promise with  Executor Function
const executorFunction = (resolve, reject) => {
  if ( 1 == true) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);

const inventory = {
  sunglasses: 10,
  pants: 1088,
  bags: 1344
};

// simple example
const myExecutor = (resolve, reject) => {
  if( inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } 
  else {
    reject('That item is sold out.')
  }
}
// const orderSunglasses = () => {return new Promise(myExecutor)}
// const orderPromise = orderSunglasses()
// console.log(orderPromise)

// .then()
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
const handleSuccess = (resolvedValue) => {
  console.log('succes: '+ resolvedValue);
};
const handleFailure = (rejectionReason) => {
  console.log('failure: ' + rejectionReason);
};
// prom.then(handleSuccess, handleFailure);

//.catch()
prom.then(handleSuccess).catch(handleFailure)

// different syntax that return same result 
// 1.
const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });
 
const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};
 
const promise1 = examplePromise1.then(onFulfill, onReject);
 
const promise2 = examplePromise2.then(onFulfill).catch(onReject);

// 2.
let onFulfill = value => {console.log(value)};
let onReject = reason => {console.log(reason)};
 
const promise =  new Promise( (resolve, reject) => {
  if (1==false) {
    resolve('success value');
  } else {
    reject();
  }
});
 
promise.then(onFulfill, onReject);