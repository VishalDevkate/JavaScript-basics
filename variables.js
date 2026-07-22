let str = "Hello, World!";
console.log(`str: ${str}`);
console.log(`typeof str: ${typeof str}`);

console.log("Demonstrating const:");
const APP_URL = "https://example.com";
console.log(`APP_URL: ${APP_URL}`);
// APP_URL = "https://newexample.com"; // This will throw an error because APP_URL is a constant

let $num = 42;
let _num = 100;
let num1 = 200;
//let 2num = 300;   // This will throw an error because variable names cannot start with a number
console.log(`$num: ${$num}`);
console.log(`_num: ${_num}`);
console.log(`num1: ${num1}`);

console.log("Demonstrating scoping difference of var and let:");
var count = 10;
console.log(`count: ${count}`);
console.log(`typeof count: ${typeof count}`);
if (count > 5) {
    let message = "Count is greater than 5";
    console.log(message);
    var count = 20; // This will not throw an error, but it will change the value of count
    console.log(`the value of count(var) inside if block: ${count}`);
}
console.log(`the value of count(var) outside if block: ${count}`);

// Demonstrating block scope with let
let count1 = 10;
console.log(`count1: ${count1}`);
console.log(`typeof(count1): ${typeof count1}`);
if (count1 > 5) {
    let message = "Count is greater than 5";
    console.log(message);
    let count1 = 20; // This will not throw an error, but it will create a new variable count1 in the block scope
    console.log(`the value of count(let) inside if block: ${count1}`);
}   
console.log(`the value of count(let) outside if block: ${count1}`);

