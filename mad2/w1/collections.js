// let x = [1, 2, 3];
// console.log(`${typeof(x)}: ${x} with length = ${x.length}`);
// console.log(x[0]);

// let x = [1, 'b', a => a + 1];
// x.length = 5;
// for (let i=0; i<x.length; i++) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);
// }

// for (const i of x) {
//     console.log(`x: ${i} of type ${typeof(x[i])}`);
// }

// Are objects iterable

// let x = { 'a': 1, 'b': 'alpha', 'c': [3, 2, 1] };
// for (const i in x) {
//     console.log(x[i]);
// }

// for (const [k, v] of Object.entries(x)) {
//     console.log(v);
// }


/***
* Creating arrays with holes
*/
// let x = new Array(5);
// x[1]=10;
// x[3]='hello';
// for (const [k, v] of x.entries()) {
//     console.log(`Index ${k}, value: ${v} fo type ${typeof(v)}`);
// }


