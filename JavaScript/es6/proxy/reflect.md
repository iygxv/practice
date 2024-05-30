### Reflect 
Reflect对象与Proxy对象一样，也是ES6为了操作对象而提供的新API。
#### 什么是Reflect对象呢？
可以这样理解：有一个名为Reflect的全局对象，上面挂载了对象的某些特殊函数，这些函数可以通过类似于Reflect.apply()这种形式来调用，所有在Reflect对象上的函数要么可以在Object原型链中找到，要么可以通过命令式操作符实现，例如delete和in操作符。