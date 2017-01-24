describe('a function challange that', function () {
  it('should exist', function () {
    expect(challange).toBeDefined()
  })
  it('should return a string', function () {
    var result = challange('B')
    expect(typeof result).toBe('string')
  })
  it('should return "A\nB B\n A" when input is B', function () {
    expect(challange('B')).toBe('A\nB B\n A')
  })
  it('should return " A\n B B\nC   C\n B B\n A" when input is C', function () {
    expect(challange('C')).toBe(' A\n B B\nC   C\n B B\n A')
  })
  it('should return "  A\n  B B\n C   C\nD     D\n C   C\n  B B\n   A" when input is D', function () {
    expect(challange('D')).toBe('  A\n  B B\n C   C\nD     D\n C   C\n  B B\n   A')
  })
  it('should return "   A\n   B B\n  C   C\n D     D\nE      E\n  D     D\n  C   C\n   B B\n     A" when input is E', function () {
    expect(challange('E')).toBe('   A\n   B B\n  C   C\n D     D\nE      E\n  D     D\n  C   C\n   B B\n     A')
  })
})
