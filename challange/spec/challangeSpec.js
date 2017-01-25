describe('a function mysteryChallange that', function () {
  it('should exist', function () {
    expect(mysteryChallange).toBeDefined()
  })
  it('should return a string', function () {
    var result = mysteryChallange('B')
    expect(typeof result).toBe('string')
  })
  it('should return a string even with loweCase input', function () {
    var result = mysteryChallange('b')
    expect(typeof result).toBe('string')
  })
  it('should return "Error wrong input" when entering NOT a single letter', function () {
    var result = mysteryChallange('aa')
    expect(result).toBe('Error wrong input')
  })
  it('should return "Error wrong input" when entering a number', function () {
    var result = mysteryChallange(5)
    expect(result).toBe('Error wrong input')
  })
  it('should return "A" when input is A', function () {
    expect(mysteryChallange('A')).toBe('A\n')
  })
  it('should return " A\nB  B\n A\n" when input is B', function () {
    expect(mysteryChallange('B')).toBe(' A\nB  B\n A\n')
  })
  it('should return "  A\n B  B\nC    C\n B  B\n  A\n" when input is C', function () {
    expect(mysteryChallange('C')).toBe('  A\n B  B\nC    C\n B  B\n  A\n')
  })
  it('should return "   A\n  B  B\n C    C\nD      D\n C    C\n  B  B\n   A\n" when input is D', function () {
    expect(mysteryChallange('D')).toBe('   A\n  B  B\n C    C\nD      D\n C    C\n  B  B\n   A\n')
  })
  it('when input is G string.length should be 151', function () {
    var result = mysteryChallange('G')
    expect(result.length).toEqual(151)
  })
})
