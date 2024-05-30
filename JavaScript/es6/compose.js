function add(a, b) {
  return a + b
}
function len (str) {
  return str.length
}
function preFix(str) {
   return `$${str}`
}
// console.log(preFix(len(add(1, '1'))));

// 实现组合函数
/*
*  1.有未知个函数
*  2.未知参数
*/
const composeRight = (...fns) => {
  return function(...args) {
     // 从后面开始
     const lastFn = fns.pop() // 获取到最后一个函数
     let prev = lastFn(...args)
     return fns.reduceRight((prev, cur) => {
       return cur(prev)
     }, prev)
  }
}
// k
const compose = (...fns) => {
  return fns.reduce((prev, cur) => {
      return function(...args) {
        return prev(cur(...args))
      }
  })
}
// let retFn = composeRight(preFix, len, add )
let retFn = compose(preFix, len, add )
console.log(retFn);
console.log(retFn(1, '1'));
