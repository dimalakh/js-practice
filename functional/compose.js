const compose = (firstOrderFunc, ...rest) => initialValue => {
  if (!firstOrderFunc) return initialValue
  return compose(...rest)(firstOrderFunc(initialValue))
}

module.exports = {
  compose
}