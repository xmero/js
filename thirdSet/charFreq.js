// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
var charCheck = 'abbabcbdbabdbdbabababcbcbab'

function charFreq (stringToCheck) {
  var charList = {}
  function checkEach (character) {
    charList[character] = charList[character] + 1 || 1
  }
  stringToCheck.split('').forEach(checkEach)
  return charList
}

charFreq(charCheck)
