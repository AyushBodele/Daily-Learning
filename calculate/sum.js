let z = "This is an sum function from another file";
console.log(z);

function sum(a, b) {
  return a + b;
}
const result = sum(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

module.exports = {z, sum, result};