// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function hexadecimal (color) {
  var r = ''
  var g = ''
  var b = ''
  var result = ''
  var raw = []

  raw = color.split('')
  r = raw[1] + raw[2]
  g = raw[3] + raw[4]
  b = raw[5] + raw[6]

  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)

  result += (r + ',' + g + ',' + b)
  return result
}

hexadecimal('#0000FF')
