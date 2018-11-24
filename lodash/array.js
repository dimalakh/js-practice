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

module.exports = {
  chunk
}