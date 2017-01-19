// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (original) {
  var reversed = []

  for (var i = 0; i < original.length; i++) {
    reversed[original.length - i] = original[i]
  }

  return reversed.join('')
}

reverse('tomatoe')
