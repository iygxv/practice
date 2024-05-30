// class 基本的使用
class Person {
  constructor(name, age) {
    // 构造函数
    this.name = name
    this.age = age
  }
  say() {
    console.log('非静态方法');
  }
  // 静态方法的使用
  static toString() {
    console.log('静态方法, 只能通过 (类.方法) 去使用');
  }
}
