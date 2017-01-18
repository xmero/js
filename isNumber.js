// Define a function called isNumber that receives a value and return true if the value received is a number

function isNumber (n){
var number = (typeof n === 'number') ? n + ': Is a number' : n + ': Is not a number'
return number
}

isNumber()
