// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function multiplicationsOnDemand (a) {
  var sTable = ' '
  for (var i = 1; i <= 10; i++) {
    sTable += (i * a) + ' '
  }
  return sTable
}

multiplicationsOnDemand(5)

