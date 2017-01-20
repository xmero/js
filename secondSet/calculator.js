// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

function calculator (op, n1, n2) {
  var result = 0
  switch (op) {
    case 'sum':
      result = n1 + n2
      break
    case 'sub' :
      result = n1 - n2
      break
    case 'mult' :
      result = n1 * n2
      break
    case 'div' :
      result = n1 / n2
      break
    default :
      return 'Please introduce some numbers next time.'
  }
  return result
}

calculator('sum', 2, 4)
