const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmediate"));
fs.readFile("file.txt", () => console.log("File Reading CB"));

Promise.resolve().then(() => console.log("Promise resolved"));
process.nextTick(() => console.log("Next Tick Callback"));

setTimeout(() => console.log("Timer expired"), 0);
function printA() {
  console.log("a=", a);
}
printA();
process.nextTick(() => console.log("Next Tick Callback"));
console.log("Last line of the file.");
