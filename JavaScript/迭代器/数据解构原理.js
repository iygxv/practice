// 数组迭代器
const arr = [1, 2 , 3]
// const [x, y, z] = arr

let iter = arr[Symbol.iterator]()
console.log('iter:', iter)
let x = iter.next().value
let y = iter.next().value
let z = iter.next().value
console.log('x:', x)
console.log('y:', y)
console.log('z:', z)
