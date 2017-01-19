// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (s) {
  return s.replace(/[b-df-hj-np-tv-z]/gi, '$&' + 'o' + '$&')
}

translate('tomatoes')
