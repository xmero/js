// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (letter) {
  if (letter.length > 1) {
    return ('You wrote more than one letter')
  }
  var check = false
  if (letter.toLowerCase() === ('a' || 'e' || 'i' || 'o' || 'u')) {
    check = true
  }
  return check
}

isVowel('A')
