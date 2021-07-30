let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically', 'Last'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWords = story.split(' ')

console.log(storyWords.length)

let betterWords = storyWords.filter(word => {
  if (unnecessaryWords.includes(word)) {
    return false
  } else return true
})

function checkWordNum(inputWord) {
  return storyWords.reduce(function (wordNum, word) {
    if (inputWord === word) {
      return ++wordNum
    } else return wordNum
  }, 0)
}

for (let overusedWord of overusedWords) {
  console.log(`${overusedWord} : ${checkWordNum(overusedWord)}`)
}

const numOfSentences = betterWords.reduce((numOfSentences, word) => {
  let lastWord = word[word.length - 1]
  if (lastWord === "." || lastWord == '!') {
    return ++numOfSentences
  } else return numOfSentences
}, 0)

console.log(numOfSentences)

// console.log(betterWords)

function removeOverUsedWord(words, overusedWords, replaceWord) {
  let result = []

  for (const word of words) {
    let isOveruseWord = overusedWords.includes(word)
    // word === overUsedWord
    if (isOveruseWord) {
      if (replaceWord) {
        result.push(replaceWord)
      }
    }

    // push word in to result when word is not overuse
    if (!isOveruseWord) {
      result.push(word)
    }
  }
  return result
}

let bestWord = removeOverUsedWord(betterWords, overusedWords, "very")

// console.log(betterWords.length)
// console.log(bestWord)
// console.log(betterWords.length - bestWord.length)
/*
let maxNumOfWord = 0
let greatestOfWord = ""

for (let word of (new Set(storyWords))) {
  let wordNum = checkWordNum(word)
  if (wordNum > maxNumOfWord) {
    maxNumOfWord = wordNum
    greatestOfWord = word
  }
}

console.log(greatestOfWord)
console.log(maxNumOfWord)
*/
console.log('finds the word that appears the greatest number of times')
// Write a function that finds the word that appears the greatest number of times.
// checkWordNum 可以查inputWord在storyWords出現左幾多次
// 詳細睇 4.
function checkWordNum(inputWord) {
  function countWord(wordNum, word) {
    if (inputWord === word) {
      return ++wordNum;
    } else {
      return wordNum;
    }
  }

  return storyWords.reduce(countWord, 0);
}
// Set 兩個variable 用呢儲出現最多次的 字 同 次數
let maxNumOfWord = 0;
let greatestOfWord = "";

// loop over storyWords 一個個字查出現左幾多次
for (let word of storyWords) {
  let wordNum = checkWordNum(word);
  // 如果有出現次數更多的字出現, 會update最多次的 字 同 次數
  if (wordNum > maxNumOfWord) {
    maxNumOfWord = wordNum;
    greatestOfWord = word;
  }
}

// loop完 兩個variable就係出現最多次的 字 同 次數
console.log(greatestOfWord);
console.log(maxNumOfWord);