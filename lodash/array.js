const chunk = (arr, size = 1) => {
  if (!arr || size < 1) return []
  const acc = []

  for (let i = 0; i <= arr.length - 1; i++) {
    const lastAccIndex = acc.length - 1
  
    if (!acc[lastAccIndex] || acc[lastAccIndex].length === size) {
      acc.push([arr[i]])
    } else {
      acc[lastAccIndex].push(arr[i])
    }
  }
  return acc
}

const compact = (arr) => {
  if (!arr) return []

  return arr.filter(item => !!item)
}

const difference = (arr, values) => {
  if (!arr || !values) return []

  return arr.filter(item => {
    return !values.some(value => value === item)
  })
}

module.exports = {
  chunk,
  compact,
  difference
}