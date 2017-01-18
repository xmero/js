// Improve the previous function to add a random number between 0 and 1000 every 7 characters.

function encodeWordPlus (s) {
  var decomp = []
  var up = s.toUpperCase()
  decomp = up.split('')
  for (var i = 0; i < decomp.length; i++) {
    switch (decomp[i]) {
      case 'T':
        decomp[i] = '7'
        break
      case 'A':
        decomp[i] = '4'
        break
      case 'S':
        decomp[i] = '5'
        break
      case 'O':
        decomp[i] = '0'
        break
      default:
        decomp[i] = decomp[i].toLowerCase()
        break
    }
    if (i % 7 === 0 && i !== 0) {
      decomp.splice(i, 0, (1000 * Math.random()))
    }
  }
  return decomp
}

encodeWordPlus()
