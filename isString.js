// Define a function called ​isString​ that receives a value and return true if the value received is a string

function isString (s) {
var string = (typeof s === 'string') ? s + ': Is a string' : s + ': Is not a string'
return string
}

isString()