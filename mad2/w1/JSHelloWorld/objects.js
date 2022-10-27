/***
 * Basic object literals and methods
 */
// ////////// Objects
// let xx = {'a': 5, 'b': 'hello'};
// console.log(xx);
// xx.add = function(x, y) {
//   return x+y;
// }
// console.log(`xx is of type ${typeof(xx)}`);
// console.log(`xx.add is of type ${typeof(xx.add)}`);
// console.log(`Evaluate the function xx.add(3,4) gives ${xx.add(3,4)}`);

// Special variable 'this'
// Add a function that uses the value:
// xx.f = function(x) {
//   return this.a + x;
// }
// console.log(xx.f(10));

/***
 * Copying
 */
// let x = {a: 1, b: 2};
// let y = x;
// console.log(x);
// console.log(y);
// x.a = 3;
// console.log(x);
// console.log(y);

// let z = {...x};
// x.a = 5;
// console.log(x);
// console.log(y);
// console.log(z);

/***
 * get and set properties
 */
// let user = {
//   first: 'Albert',
//   last:  'Pinto',
//   get full() {
//     return this.first + ' ' + this.last;
//   },
//   set full(f) {
//     const parts = f.split(' ');
//     this.first = parts[0];
//     this.last = parts[1];
//   },
// }
// console.log(user.full);
// user.full = 'Gabbar Singh';
// console.log(`Now ${user.first} and ${user.last}`);

/***
 * Function methods 
 */
// let xx = {'a': 5, 
//   'b': 'hello',
//   'add': function (x, y) {
//      return x + y + this.a;
//   }
// }
// // console.log(xx.add(3,4));
// let z = xx.add
// call()
// console.log(z.call("", 3, 4));
// console.log(z.call(xx, 3, 4));

// apply() - spreads the arguments - extra ignored
// console.log(z.apply(xx, [1, 2, 3, 4]));

// bind() - closure
// let z2 = z.bind(xx, 2);
// console.log(z2(3));

/***
 * Prototypes
 */
// const x = {a: 1, inc: function() {this.a++;}};
// console.log(x);
// const y = {__proto__: x, b: 2};
// console.log(y);
// console.log(y.a);
// y.inc();
// console.log(y.a);

/***
 * Classes
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return `${this.name} makes a sound ${this.sound}`
  }
}
let x = new Animal('Jerry');
// console.log(x.describe());

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.sound = 'Woof';
  }
}
let d = new Dog('Spike');
// console.log(d.describe());

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.sound = 'Miaow';
  }
  static fromJson(o) {
    c = new Cat(o.name);
    c.sound = o.sound;
    return c;
  }
}
let c = new Cat('Tom');
// console.log(c.describe());

/***
 * JSON back and forth
 */
let p = JSON.stringify(c);
// console.log(c);
// console.log(p);

let cc = Cat.fromJson(JSON.parse(p));
// console.log(cc.describe());