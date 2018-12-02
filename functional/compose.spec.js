const { compose } = require('./compose')

describe('Compose', () => {
  it('should return null if no arguments passed', () => {
    const result = compose()(null)
    expect(result).toBe(null)
  })

  it('should return 15', () => {
    const mockedFunc = n => n + 5
    const result = compose(
      mockedFunc,
      mockedFunc
    )(5)
    expect(result).toBe(15)
  })
})