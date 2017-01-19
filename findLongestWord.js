// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

var arrayToCompare = ['tomatoe', 'potatoe', 'toe', 'shoe', 'tippytoe', 'mistletoe']
var theLongestWord = ''

function findLongestWord (arrayToCompare) {
  for (var i = 0; i < arrayToCompare.length; i++) {
    if (theLongestWord.length < arrayToCompare[i].length) {
      theLongestWord = arrayToCompare[i]
    }
  }
  return theLongestWord
}

findLongestWord(arrayToCompare)
