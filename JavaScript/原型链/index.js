// 1.顶层对象Object和顶层函数Function的关系
// 1.1从原型链方面来说: Function继承于Object
Function.prototype.__proto__ === Object.prototype // true
// isPrototypeOf确定一个对象是否存在于另一个对象的原型链中。
Object.prototype.isPrototypeOf(Function) // true

// 1.2从构造器方面来说: Function构造了Object
Object.__proto__ = Function.prototype // true
Function === Object.constructor // true

// 2原型链
// 2.1对象有2种: 一种是普通对象, 一种是函数对象
// 2.1.1普通对象都有__proto__ 这个属性
let obj = {}
typeof obj.__proto__ // object
obj.constructor // ƒ Object() { [native code] } 原生Object
typeof obj.constructor // function
obj.constructor.__proto__ === Function.prototype // true
Object.__proto__ === Function.prototype // true

// 2.1.2函数对象都有prototype这个属性
let fn = function fn() {}
typeof fn.prototype // 'object'
fn.constructor // fn.constructor 原生Function
typeof fn.constructor // 'function'
fn.constructor.prototype.__proto__ === Object.prototype


//3 类class