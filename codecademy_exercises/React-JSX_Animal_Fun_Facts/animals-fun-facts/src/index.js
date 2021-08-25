import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const title = ''
const background = <img class="background" alt="ocean" src="http://pngimg.com/uploads/sea/sea_PNG1.png"/>

const displayFact = (e)=>{
  let selectedAnimal = e.target.alt
  console.log(selectedAnimal)
  let randomIndex = Math.floor(Math.random()* animals[selectedAnimal].facts.length)
  console.log(randomIndex)
  let funFact = animals[selectedAnimal].facts[randomIndex]
  console.log(funFact)
  return document.getElementById('fact').innerHTML = funFact
}

let images = []
for (let animal in animals){
  images.push(
  <img 
    key = {animal}
    className = 'animal'
    alt={animal}
    src={animals[animal].image}
    aria-label= {animal}
    role='button'
    onClick={displayFact} />)
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div> )



ReactDOM.render(animalFacts, document.getElementById('root'))