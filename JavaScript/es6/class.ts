/**
 * private protect public
 * private 私有的, 只允许自己访问
 * protected 受保护的, 只允许自己和自己的后辈访问
 * public 公有的, 自己和后辈还有实例都可以访问
 * 带static的属性和方法 只能通过类调用
 */

class Person2 {
  name: string
  age: number
  constructor(x: string, y: number) {
    this.name = x
    this.age = y
  }
  static say() {
    console.log('say')
  }
  getName() {
    return this.name
  }
}
class Vvv extends Person2 {
  protected hobby: string
  constructor(name: string, age: number, hobby: string) {
    super(name, age)
    this.hobby = hobby
  }
}
