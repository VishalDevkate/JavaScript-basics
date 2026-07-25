let str = "Hello, World!";
console.log(`str: ${str}`);
console.log(`typeof str: ${typeof str}`);

console.log("Demonstrating const:");
// const radius; // This will throw an error because const variables must be initialized at the time of declaration
const APP_URL = "https://example.com";
console.log(`APP_URL: ${APP_URL}`);
// APP_URL = "https://newexample.com"; // This will throw an error because APP_URL is a constant and can not be reassigned

let $num = 42;
let _num = 100;
let num1 = 200, num2 = 300; //multiple variables can be declared in a single statement
//let 2num = 300;   // This will throw an error because variable names cannot start with a number
//let throw = "valid variable name"; //can not use reserved keywords as variable names
console.log(`$num: ${$num}`);
console.log(`_num: ${_num}`);
console.log(`num1: ${num1} num2: ${num2}`);

console.log("Demonstrating scoping difference of var and let:");
var count = 10;
console.log(`count: ${count}`);
console.log(`typeof count: ${typeof count}`);
if (count > 5) {
    let message = "Count is greater than 5";
    console.log(message);
    var count = 20; // This will not throw an error, but it will change the value of count outside block also. Because var doesnt support block scope.
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

// Demostrating variable without value
let variableWithoutValue;
console.log(`variableWithoutValue: ${variableWithoutValue}`);
console.log(`typeof variableWithoutValue: ${typeof variableWithoutValue}`);

//cant have same variable name for other types(e.g. function name, object name)
let greeting = "Hello";
function greeting() {  // This will throw an error because variable name and function name are the same
    console.log("This is a function named greeting");
}

