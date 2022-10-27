/***
 * Call stack
 */
// function h(z) {
//   const error = new Error();
//   console.log(error.stack);
// }
// function g(y) {
//   h(y + 1);
// }
// function f(x) {
//   g(x + 1);
// }
// f(3);

/***
 * Asynchronous event
 */
// const e = document.getElementById("d1");
// e.innerHTML = "Click on this";
// e.addEventListener('click', clickHandler);
// function clickHandler(event) {
//   console.log(event);
// }

/***
 * How to freeze the browser!
 */
// function wait(N) {
//   let sum = 0;
//   for (i=0; i<N; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(wait(100000000000));

/***
 * Alternative
 */
// async function wait(N) {
//   let sum = 0;
//   console.log(`Starting with ${N}`)
//   for (i=0; i<N; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }

// async function demo() {
//   let x = [
//     await wait(100000000), 
//     await wait(1000),
//     await wait(100),
//     await wait(10),
//   ];
//   console.log(x);
// }
// async function demo() {
//   let x = await Promise.all([
//      wait(1000000000), 
//      wait(1000),
//      wait(100),
//      wait(10),
//   ]);
//   console.log(x);
// }

// demo();
