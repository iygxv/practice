// callback(prev, cur, i, arr)
Array.prototype._reduce = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (!prev) {
      prev = callback(this[i], this[i + 1], i + 1, this)
      i += 1
    } else {
      prev = callback(this[i], this[i], i, this)
    }
  }
  return prev
}
