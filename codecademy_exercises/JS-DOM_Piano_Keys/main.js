// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = (event) => {
  event.target.style.backgroundColor = 'teal'
}
const keyReturn = (event) => {
  event.target.style.backgroundColor = ''
}

// Write a named function with event handler properties
handleClick = (note) =>{
  note.addEventListener('mousedown', (e)=>{
    keyPlay(e)
  })
  note.addEventListener('mouseup', (e)=>{
    keyReturn(e)
  })
}

// Write a loop that runs the array elements through the function
notes.forEach(note=>note.onclick = handleClick(note))

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = ()=>{
	nextOne.hidden = true;
	nextTwo.hidden = false;
	document.querySelector('#letter-note-five').innerHTML = 'D'
	document.querySelector('#letter-note-six').innerHTML = 'C'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = ()=>{
	nextTwo.hidden = true;
	nextThree.hidden = false;
	document.querySelector('#word-five').innerHTML = 'DEAR'
	document.querySelector('#word-six').innerHTML = 'FRI-'
	document.querySelector('#letter-note-three').innerHTML = 'G'
	document.querySelector('#letter-note-four').innerHTML = 'E'
	document.querySelector('#letter-note-five').innerHTML = 'C'
	document.querySelector('#letter-note-six').innerHTML = 'B'
	lastLyric.style.display= 'inline-block'
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = ()=>{
	nextThree.hidden = true;
	startOver.hidden = false;
	document.querySelector('#word-one').innerHTML = 'HAP-'
	document.querySelector('#word-two').innerHTML = 'PY'
	document.querySelector('#word-three').innerHTML = 'BIRTH'
	document.querySelector('#word-four').innerHTML = 'DAY'
	document.querySelector('#word-five').innerHTML = 'TO'
	document.querySelector('#word-six').innerHTML = 'YOU!'
	document.querySelector('#letter-note-one').innerHTML = 'F'
	document.querySelector('#letter-note-two').innerHTML = 'F'
	document.querySelector('#letter-note-three').innerHTML = 'E'
	document.querySelector('#letter-note-four').innerHTML = 'C'
	document.querySelector('#letter-note-five').innerHTML = 'D'
	document.querySelector('#letter-note-six').innerHTML = 'C'
	lastLyric.style.display= 'none'

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}