// Define a function called getFullName that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated

function getFullName () {
  var fullName = ''
  for (var i = 0; i < arguments.length; i++) {
    if (typeof (arguments[i]) !== 'string') {
      return arguments[i] + ': Is not a valid name'
    }
    fullName += arguments[i] + ' '
  }
  return 'Your full name is ' + fullName
}

getFullName()
