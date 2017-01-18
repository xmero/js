// Define a function called encodeWord that receives a string and return the codified version of that string replacing the following characters:

function encodeWord (s) {
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
  }
  return decomp.join('')
}

encodeWord()
