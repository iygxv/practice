Array.prototype.myReduce = function(callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (!prev) {
      // 如果没有prev 就会以数据第一位充当prev
      prev = callback(this[i], this[i + 1], i + 1, this)
      i += 1
    } else {
      prev = callback(prev, this[i], i, this)
    }
  }
  return prev
}
let arr = [1, 2, 3, 4]
console.log(arr.myReduce((prev, cur, i, array) => {
  return prev + cur
}));