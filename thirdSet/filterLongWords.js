// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var arrayToCompare = ['tomatoe', 'potatoe', 'toe', 'shoe', 'tippytoe', 'mistletoe']

function filterLongWords (arrayToCompare, desiredLength) {
  var wordList = []
  for (var i = 0; i < arrayToCompare.length; i++) {
    if (arrayToCompare[i].length >= (desiredLength)) {
      wordList.unshift(arrayToCompare[i])
    }
  }
  return wordList
}

filterLongWords(arrayToCompare, 4)

// V2

var arrayV2 = ['tomatoe', 'potatoe', 'toe', 'shoe', 'tippytoe', 'mistletoe']
var maxLen = 4

function isLongerThan (word) {
  return word.length >= maxLen
}

arrayV2.filter(isLongerThan)

// V3

var arrayV3 = ['tomatoe', 'potatoe', 'toe', 'shoe', 'tippytoe', 'mistletoe']

function filterLongWordsV3 (arrayV2, maxLen) {
  function isLongerThan (word) {
    return word.length >= maxLen
  }
  return arrayV3.filter(isLongerThan)
}

filterLongWordsV3(arrayV3, 5)
