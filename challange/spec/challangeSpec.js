describe('a function printDiamond that', function () {
  it('should exist', function () {
    expect(printDiamond).toBeDefined()
  })
  it('should return a string', function () {
    var result = printDiamond('B')
    expect(typeof result).toBe('string')
  })
  it('should return a string even with loweCase input', function () {
    var result = printDiamond('b')
    expect(typeof result).toBe('string')
  })
  it('should return "Error wrong input" when entering NOT a single letter', function () {
    var result = printDiamond('aa')
    expect(result).toBe('Error wrong input')
  })
  it('should return "Error wrong input" when entering a number', function () {
    var result = printDiamond(5)
    expect(result).toBe('Error wrong input')
  })
  it('should return "A" when input is A', function () {
    expect(printDiamond('A')).toBe('A\n')
  })
  it('should return " A\nB  B\n A\n" when input is B', function () {
    expect(printDiamond('B')).toBe(' A\nB  B\n A\n')
  })
  it('when input is G string.length should be 151', function () {
    var result = printDiamond('g')
    expect(result.length).toEqual(151)
  })
})
