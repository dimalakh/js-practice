const { chunk } = require('./array')

describe('Array', () => {
  describe('chunk', () => {
    const mockedArr = [ 1, 2, 3, 4, 5 ]

    it('should return empty array, if array is not passed', () => {
      const result = chunk()
      expect(result).toEqual([])
    })

    it('should return empty array, chunk size is less then 1', () => {
      const result = chunk([], -2)
      expect(result).toEqual([])
    })

    it('should split array to chunks with size 1', () => {
      const result = chunk(mockedArr)
      const expectedResult = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

      expect(result).toEqual(expectedResult)
    })

    it('should split array to chunks with custom size', () => {
      const result = chunk(mockedArr, 2)
      const expectedResult = [ [ 1, 2 ], [ 3,  4 ], [ 5 ] ]

      expect(result).toEqual(expectedResult)
    })
  })
})