export let x = "This is an sum function from another file";
console.log(x);

export function sum(a, b) {
  return a + b;
}
export const result = sum(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

// module.exports = {x, sum, result};