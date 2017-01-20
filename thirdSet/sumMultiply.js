// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
var arrayTest = [3, 4, 5, 6, 7, 8, 9, 1]

// Sum function

var acc = 0
function sum (numbers, index) {
  acc += numbers
}

function displayTotalSum (numbers) {
  numbers.forEach(sum)
  return acc
}

displayTotalSum(arrayTest)

// Mult function

var acc2 = 1
function mult (numbers, index) {
  acc2 *= numbers
}

function displayTotalMult (numbers) {
  numbers.forEach(mult)
  return acc2
}

displayTotalMult(arrayTest)
