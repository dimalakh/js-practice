const { chunk, compact, difference } = require('./array')

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

  describe('difference', () => {
    const mockedArr = [1, 2, 3]

    it('should return an empty array if array equal to values', () => {
      const result = difference(mockedArr, mockedArr)
      expect(result).toEqual([])
    })
    it('should return empty array if one of arguments is not defined', () => {
      const result = difference(mockedArr)
      expect(result).toEqual([])
    })
    it('should return difference', () => {
      const mockedValues = [ 2, 3, 4]
      const result = difference(mockedArr, mockedValues)
      expect(result).toEqual([ 1 ])
    })
    it('should return difference with different types', () => {
      const mockedArr = [ 1, null, 2, 3, 'Hello', false ]
      const mockedValues = [ 1, 2 ]
      const result = difference(mockedArr, mockedValues)
      expect(result).toEqual([ null, 3, 'Hello', false ])
    })
  })
})