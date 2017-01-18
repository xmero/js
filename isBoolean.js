// Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

function isBoolean (d) {
var bool = (typeof d === 'boolean') ? d + ': Is a boolean' : d + ': Is not a boolean'
return bool
}

isBoolean()