// translate()

// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

/* Version 1 */

function translate (originalText) {
  var numCharacters = originalText.length
  var currentChar
  var translatedText = ''

  function isVowel (char) {
    return /[aeiou]/.test(char.toLowerCase())
  }

  function isSpecialChars (char) {
    return /[ ,*]/.test(char)
  }

  for (var i = 0; i < numCharacters; i++) {
    currentChar = originalText[i]
    translatedText += currentChar

    if (!isVowel(currentChar) && !isSpecialChars(currentChar)) {
      translatedText += 'o' + currentChar
    }
  }
  return translatedText
}

/* Version 2 */

function translate (originalText) {
  var numCharacters = originalText.length
  var currentChar
  var translatedText = ''

  function isConsonant (char) {
    return /[b-df-hj-np-tv-zñ]/i.test(char)
  }

  for (var i = 0; i < numCharacters; i++) {
    currentChar = originalText[i]
    translatedText += currentChar

    if (isConsonant(currentChar)) {
      translatedText += 'o' + currentChar
    }
  }
  return translatedText
}

/* Version 3 */

function translateToRovarspraket (text) {
  return text.replace(/[b-df-hj-np-tv-zñ]/ig, '$&o$&')
}
