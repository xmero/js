
function mysteryChallange (letter) {
  if (typeof letter !== 'string' || letter.length > 1) { return 'Error wrong input' }
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var n = findPosition(letter) + 1
  var diamond = ''
  function findPosition (letter) {
    for (i = 0; i < alphabet.length; i++) {
      if (letter.toUpperCase() === alphabet[i]) {
        return i
      }
    }
  }
// Main loop for first half of the diamond
  for (var i = 0; i < n; i++) {
    for (var a = 0; a < (n - (i + 1)); a++) {
      diamond += ' '
    }
    diamond += alphabet[i]
    for (var b = 0; b < (i * 2); b++) {
      diamond += ' '
    }
    if (alphabet[i] === 'A') {
      diamond += '\n'
    } else { diamond += (alphabet[i] + '\n') }
  }
 // Main loop for the second half of the diamond
  for (var j = n - 2; j >= 0; j--) {
    for (var a = 0; a < (n - (j + 1)); a++) {
      diamond += ' '
    }
    diamond += alphabet[j]
    for (var b = 0; b < (j * 2); b++) {
      diamond += ' '
    }
    if (alphabet[j] === 'A') {
      diamond += '\n'
    } else { diamond += (alphabet[j] + '\n') }
  }
  return diamond
}
