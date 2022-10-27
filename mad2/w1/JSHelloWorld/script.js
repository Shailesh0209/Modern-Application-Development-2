////////// - Hello world!
// console.log("Hello console!");

////////// - Comments
// This is a simple comment
/* This is a multi-line
 * comment similar to C or Java 
 */

////////// - Identifiers and Variables
// let x = 0;
// const AnotherVariable = 42;
// var we_dont_use_var = true;
// // // And Unicode!
// let शहर = 'சென்னை';
// console.log(शहर)

////////// - Scope - change var/let
// const x1 = 10;
// { 
//   console.log(x1);
//   const x2 = 30;
// }
// console.log(x2);

// ////////// - Strings
// let s = "Hello";
// console.log(s);
// console.log(s.length);
// console.log(s[1]);
// console.log(s.substring(2,4));
// let शहर = 'சென்னை';
// console.log(शहर.length);
// ////////// - Templates
// let st = `${s} World`;
// console.log(st);
// console.log(`Length of ${शहर} = ${शहर.length}`);

// ////////// - Operators and Coercion
// console.log( 3 + 4);
// console.log('3' + '4');
// console.log('3' + 4);
// console.log(3 + '4');
// console.log('3' * '4');
// //////// - Loose and Strict equality
// console.log(3 == 4);
// console.log(3 == 3);
// console.log('3' == 3);
// //////// - Strict equality
// console.log('3' === 3);
// console.log(undefined == null);
// console.log(undefined === null);

/****
 * Conditions
 */
// let x = 5;
// if (x == 5) {
//   console.log("What?");
// } else {
//   console.log("Of course 3 != 5");
// }
/****
 * Iteration 
 */
// for (let x=0; x<5; x++) {
//   console.log(x);
// }
////////// - iteration - in vs of
// const v = [1, 2, 3, 4];
// for (const x of v) {
//   console.log(x);
// }

/****
 * Functions
 */
//////////  Basic functions and objects
// function add(x, y) {
//   return x + y;
// }
// console.log(typeof(add));
// console.log(add(2,3));
// add.v = {'a': 3, 'b': 6};
// console.log(add.v);
// console.log(add.v.a);
// console.log(add.x);

//////// - Arrow notation
// let add1 = (x, y) => (x+y);

//////// Anonymous function
// console.log(function (x, y) { return x + y; }(2,3));

//////// Assigning to Variables
// let add2 = function(x, y) { return x + y; };
// console.log(typeof(add));
// console.log(typeof(add1));
// console.log(typeof(add2));

