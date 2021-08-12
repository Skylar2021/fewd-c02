'use strict'
const button = document.querySelector('#toggle-disappear')
const main2Area = document.querySelector('#main2')

// document.querySelector() + innerHTML(change the content in tag)
// outterHTML change the whole node of DOM

button.addEventListener('click', ()=>{
  main2Area.innerHTML = "<h1>hi</h1>";
  main2Area.style.backgroundColor = 'blue'

})

function disappear(){
  main2Area.style.backgroundColor = 'blue'
  main2Area.classList.add('isHidden')
}

// classList .add() .contains() .remove()
function disappear2(){
  const main2Area = document.querySelector('#main2')
  if(main2Area.classList.contains('isHidden')){
    main2Area.classList.remove('isHidden')
  }  else {
    main2Area.classList.add('isHidden')
  }
}

// button.addEventListener('click', disappear)
button.addEventListener('click', disappear2)


// add new element with content
let addNew = document.createElement('div')
addNew.className = 'hidden'
addNew.innerHTML = "<h5 id='work'>Work</h5><p>description: This is task A.</p>"
document.querySelector('main').appendChild(addNew)

// hide element with .hidden
button.addEventListener('click', ()=>{
  document.querySelector('.hidden').hidden = true;
})

// back quote

// let arr = [obj, obj2]

const obj = {
  type: 'Work',
  dueDate:'Mid August',
  assignedTo: 'Anson',
  status: 'in progress'
}
const obj2 = {
  type: 'Family',
  dueDate:'Mid August',
  assignedTo: 'Anson',
  status: 'in progress'
}

let addWorkContent =() =>{
  
  document.querySelector('.display-work').hidden = false;
  document.querySelector('.type').innerHTML = obj.type
  document.querySelector('.due-date').innerHTML = obj.dueDate
  document.querySelector('.assigned-to').innerHTML = obj.assignedTo
  document.querySelector('.status').innerHTML = obj.status
}

button.addEventListener('click', addWorkContent)