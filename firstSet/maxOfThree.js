// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree (n1, n2, n3) {
  var max = 0

  for (var i = 0; i <= arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i]
    }
  }
  return max
}

maxOfThree(1, 5, 800000000000)
