const fs = require('fs');
const https = require('https');

console.log("Hey ! This is a test file for async.js");

let a = 10;
let b = 20;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("Fetched data successfully");
});

setTimeout(() => {
    console.log("This is a timeout function");
}, 5000);

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log("File Data: ", data);
});

function multiply(x, y) {
    const result = a * b;
    return result;
}
const output = multiply(a, b);
console.log("Output of multiply function: ", output);