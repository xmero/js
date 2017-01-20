// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation () {
  var Elements = ''
  var n = 23
  var aux = 0
  var sum = 0
  do {
    Elements += aux + ' '
    aux += n
    sum += aux
  } while (aux < 500)
  console.log('Elements:' + Elements)
  console.log('sum:' + sum)
  // return ('Elements:' + Elements + '\n' + 'Sum:' + sum)
}

calculation()
