const fs = require("fs");
const a = 100;
setTimeout(() => console.log("Timer expired"), 0);

console.log("Starting of code")

setImmediate(() => console.log("setImmediate"));

fs.readFile("file.txt", () =>{ 
    console.log("File read completed");
    process.nextTick(() => {
        process.nextTick(() => {
        process.nextTick(() => console.log("Inner Next Tick"));
        console.log("Next Tick 1");
        Promise.resolve().then(() => {
        process.nextTick(() => {
                process.nextTick(() => {
                process.nextTick(() => console.log("Inner Next Tick"));
                console.log("Next Tick 1");
                Promise.resolve().then(() => {
                process.nextTick(() => console.log("Nested Inner Next Tick"));
                Promise.resolve().then(() => console.log(" Inner Promise resolved"));
            });
        });
            console.log("Nested Inner Next Tick")}
        );
        Promise.resolve().then(() => console.log(" Inner Promise resolved"));
    });
});
        console.log("Next Tick 2")}
    );
    setImmediate(() => console.log("setImmediate 2"));
});


Promise.resolve().then(() => console.log("Promise resolved"));

process.nextTick(() => console.log("Next Tick Callback"));


function printA() {
  console.log("a=", a);
}
printA();
process.nextTick(() => {
    process.nextTick(() => console.log("Inner Next Tick"));
    console.log("Next Tick 1");
    Promise.resolve().then(() => {
        process.nextTick(() => console.log("Nested Inner Next Tick"));
        Promise.resolve().then(() => console.log(" Inner Promise resolved"));
    });
});
console.log("Last line of the file.");
