const size = (o)=> {
  return Object.keys(o).length
}

module.exports = (a, b)=> {
  const hasDiff = Object.keys(a).some(k=> a[k] !== b[k])

  return size(a) === size(b) && !hasDiff
}
