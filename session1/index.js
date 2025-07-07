// INTRO TO JAVASCRIPT
/*

HISTORY

Brendan Eich (NetScape - 1995)
Old names of JS: Mocha, LiveScript, JavaScript
Browser Name: NetScape Navigator


*/

// JS basics

console.log("Hello World!");

// JS Variables and Data Types
// Number
let age = 20;
console.log(age);

// String
let name = "John";
console.log(name);

// Typeoff -> to check the data type of a value
console.log(typeof age);
console.log(typeof name);

let temp = 38.5;
console.log(temp);
console.log(typeof temp);

// Boolean
let isOverloaded = true;
console.log(isOverloaded);
console.log(typeof isOverloaded);

// Array
let students = ["Jane", "John", "Joey"];
console.log(students);

// Objects
// Key pair structure
let  person = {
    name: "John Doe",
    age: 19,
    email: ["jdoe@mail.com", "john@fb.com"]
}

console.log(person);


console.log("Hello World!")

// Alert
alert("Hello, admin!");

// Initialization and Variables with no data
// let vs const

// Initialization
let num1 = 10;
console.log(num1);

// Uninitialized
let num2;
console.log(num2); //Undefined

num1 = 500;
console.log(num1);

num2 = 1000;
console.log(num2);

// Const -> constant variable
const height = 130;
console.log(height);

// with let variables, data can be updated
// height = 150;
// console.log(height);

const hoursInADay = 24;
const pie = 3.14;
const numOfMonths = 12;

// JS Arithmetic Operators
let x = 10;
let y = 5;
// Addition
let sum = x + y;
console.log(sum);
// Substractions
let a = 10;
let b = 5;
let diff = a - b;
console.log(diff);
// Multiplication
let e = 10;
let q = 5;
let prod = e * q;
console.log(prod);
// Division
let num11 = 10;
let num12 = 5;
let qou = e / q;
console.log(qou);
// Modulo
let num13 = 10;
let num14 = 5;
let mod = e % q;
console.log(mod);

// Comparison operators
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Logical Operators
// AND = &&
// OR = ||

let isMarried = true;
let isLegalAge = false;

console.log("Logical AND");
console.log(isMarried && isLegalAge);

console.log("Logical OR");
console.log(isMarried || isLegalAge);

// Equality Operators
let sample1 = 10;
let sample2 = "10";
let sample3 = "John";

//  ==
console.log(sample1 == sample2);
console.log(sample1 == sample3);
console.log(sample3 == "John");

// !=
console.log(sample1 != sample2);
console.log(sample1 != sample3);

// Strict Equality ===
console.log(sample1 === sample2);
console.log(sample1 === sample3);
console.log(sample3 === "John");

// Strictly Not Equal !==
console.log(sample1 !== sample2);
console.log(sample1 !== sample3);

// User Input
let fullName = prompt("Please Enter your complete name")
console.log(fullName);

// Dynamic Sum Operation
let input1 = Number(prompt("Enter Num1: "));
let input2 = Number(prompt("Enter Num2: "));
let result = input1 + input2;
console.log(result);

console.log(typeof input1);

// Concatenation
let concat1 = "Jane";
let concat2 = 10;

console.log(concat1 + " is " + concat2 + " Years old");


















function greet(name) { 
    return "Hello " + name; 
}

greet("jm");