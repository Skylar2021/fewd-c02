let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// split the string into individual words into new array
let storyWords = story.split(' ')
// log the number of word in storyWords
console.log('word count: ' + storyWords.length)
// filter unnecessary words
let betterWords = storyWords.filter( word => !unnecessaryWords.includes(word))

// to count how many time overdueWords used
let overusedWordsCount = 0;
for (i = 0; i < overusedWords.length ; i++ ) {
  
    for (j = 0; j < betterWords.length; j++) {
      if (overusedWords[i] === betterWords[j]) {
        overusedWordsCount++;
      }      
    }  
}
console.log('overused words count: ' +overusedWordsCount)

// count how many sentences are in the paragraph
let sentenceCount = 0;
for (j = 0; j < betterWords.length; j++) {
  if (betterWords[j].endsWith('.') || betterWords[j].endsWith('!')) {
    sentenceCount++;
  }      
}  
console.log('Sentence Count: ' + sentenceCount)

// counting the number of word in array: overusedWords['really', 'very', 'basically']
let a = countingReally = 0;
let b = countingVery = 0;
let c = countingBasically = 0;

betterWords.forEach( word => word === 'really' ? a++ : a )
betterWords.forEach( word => word === 'very' ? b++ : b )
betterWords.forEach( word => word === 'basically' ? c++ : c )

console.log('Number of Really: ' + a)
console.log('Number of very: ' + b)
console.log('Number of basically: ' + c)

// to remove the overusedWords in betterWords
let newBetterWords = betterWords.filter( word => !overusedWords.includes(word) ).join(' ')
console.log(newBetterWords)

// replace overusedWords with certainly
// let newStory = betterWords.map( word => word === 'really' || word === 'very' || word === 'basically' ? 'certainly' : word).join(' ')
// console.log(newStory)

// log the betterWords array to the console as a single string
// console.log(betterWords.join(' '))