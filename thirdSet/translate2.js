// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

var lexicon = {'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år'}
var christmasCard = 'Merry Christmas and happy new year'
var christmasArray = christmasCard.split(' ')

function translate (christmasWord) {
  if (lexicon[christmasWord.toLowerCase()]) {
    return lexicon[christmasWord.toLowerCase()]
  }
  return christmasWord
}

christmasArray.map(translate).join(' ')
