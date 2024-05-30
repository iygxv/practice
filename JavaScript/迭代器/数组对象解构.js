
Object.prototype[Symbol.iterator] = function () {
  console.log(this) //  a: 1, b: 2, c: 3 }
  console.log(Object.values(this)) // [1, 2, 3]
  return Object.values(this)[Symbol.iterator]()
}

[1, 2, 3][Symbol.iterator]()
// 这样子能成功, 是因为在对象原型上添加数组迭代器 
let [a, b, c] = { a: 1, b: 2, c: 3 }

console.log(a, b, c)


