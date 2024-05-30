let s1 = Symbol("v")
let s2 = Symbol("v")
// symbol的独一性
console.log(s1 === s2); // false

// 给一个属性
let obj = {
  [Symbol.toStringTag] : 'tag'
}
console.log(obj); // tag {Symbol(Symbol.toStringTag): 'tag'}
