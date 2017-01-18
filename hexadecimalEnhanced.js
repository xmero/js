// Improves the previous function so besides the conversion also identifies some basic colors:

function hexadecimal (color) {
  var r = ''
  var g = ''
  var b = ''
  var result = ''
  var raw = []
  var colorRecognition = ''

  switch (color) {
    case '#000000':
      colorRecognition = 'Black'
      break
    case '#FFFFFF' :
      colorRecognition = 'White'
      break
    case '#FF0000' :
      colorRecognition = 'Red'
      break
    case '#00FF00' :
      colorRecognition = 'Green'
      break
    case '#0000FF' :
      colorRecognition = 'Blue'
      break
    default :
      colorRecognition = 'Not a known color'
      break
  }

  raw = color.split('')
  r = raw[1] + raw[2]
  g = raw[3] + raw[4]
  b = raw[5] + raw[6]

  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)

  result += (r + ',' + g + ',' + b)
  return (result + ', ' + colorRecognition)
}

hexadecimal('#0000FF')
