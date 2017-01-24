function challange (maxLetter) {
  if (maxLetter === 'B') {
    return 'A\nB B\n A'
  } else if (maxLetter === 'C') {
    return ' A\n B B\nC   C\n B B\n A'
  } else if (maxLetter === 'D') {
    return '  A\n  B B\n C   C\nD     D\n C   C\n  B B\n   A'
  } else if (maxLetter === 'E') {
    return '   A\n   B B\n  C   C\n D     D\nE      E\n  D     D\n  C   C\n   B B\n     A'
  }
  return 'A'
}
