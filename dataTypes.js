let str = "Hello, World!";
console.log(`str: ${str}`);
console.log(`typeof str: ${typeof str}`);   

let num = 42;
console.log(`num: ${num}`);
console.log(`typeof num: ${typeof num}`);   

let bool = true;
console.log(`bool: ${bool}`);
console.log(`typeof bool: ${typeof bool}`);

let obj = { name: "John", age: 30 };
console.log(`obj: ${JSON.stringify(obj)}`);
console.log(`typeof obj: ${typeof obj}`);

let arr = [1, 2, 3, 4, 5];
console.log(`arr: ${arr}`);
console.log(`typeof arr: ${typeof arr}`);   // This will return "object" because arrays are considered objects in JavaScript

let func = function() { return "Hello from function"; };
console.log(`func: ${func()}`);
console.log(`typeof func: ${typeof func}`);

let und = undefined;
console.log(`und: ${und}`);
console.log(`typeof und: ${typeof und}`);

let nul = null;
console.log(`nul: ${nul}`);
console.log(`typeof nul: ${typeof nul}`); // This will return "object" due to a historical bug in JavaScript

let sym = Symbol("unique");
console.log(`sym: ${sym.toString()}`);
console.log(`typeof sym: ${typeof sym}`);

let bigIntNum = 9007199254740991n; // BigInt literal
console.log(`bigIntNum: ${bigIntNum}`);
console.log(`typeof bigIntNum: ${typeof bigIntNum}`);   

let nanValue = NaN;
console.log(`nanValue: ${nanValue}`);
console.log(`typeof nanValue: ${typeof nanValue}`); // This will return "number" because NaN is considered a number in JavaScript

let infinityValue = Infinity;
console.log(`infinityValue: ${infinityValue}`);
console.log(`typeof infinityValue: ${typeof infinityValue}`); // This will return "number" because Infinity is considered a number in JavaScript

let negativeInfinityValue = -Infinity;
console.log(`negativeInfinityValue: ${negativeInfinityValue}`);
console.log(`typeof negativeInfinityValue: ${typeof negativeInfinityValue}`); // This will return "number" because -Infinity is considered a number in JavaScript   

let re = /ab+c/;
console.log(`re: ${re}`);
console.log(`typeof re: ${typeof re}`); // This will return "object" because regular expressions are considered objects in JavaScript