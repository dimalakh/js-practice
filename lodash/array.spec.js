const { chunk, compact } = require('./array')

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

  describe('compact', () => {
    it('should return empty arr if no arguments passed', () => {
      const result = compact()
      expect(result).toEqual([])
    })

    it('should return empty arr if passed arr is empty', () => {
      const result = compact([])
      expect(result).toEqual([])
    })

    it('should return array without NaN, 0, emptyString, false, null and undefined', () => {
      const mockedArr = [ NaN, 0, 1, '', 2, false, 3, null, undefined ]
      const result = compact(mockedArr)
      expect(result).toEqual([ 1, 2, 3 ])
    })
  })
})