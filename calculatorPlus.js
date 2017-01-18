// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

function calculatorPlus () {
  var result = 0
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  function sum () {
    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i]
    }
  }
  function sub () {
    for (var i = 0; i < numbers.length; i++) {
      result -= numbers[i]
    }
  }
  function mult () {
    for (var i = 0; i < numbers.length; i++) {
      result *= numbers[i]
    }
  }
  function div () {
    for (var i = 0; i < numbers.length; i++) {
      result /= numbers[i]
    }
  }

  switch (arguments[0]) {
    case 'sum':
      sum()
      break
    case 'sub' :
      sub()
      break
    case 'mult' :
      mult()
      break
    case 'div' :
      div()
      break
    default :
      return 'Please introduce some numbers next time.'
  }
  return result
}

calculatorPlus()
