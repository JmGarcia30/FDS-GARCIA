// ES6 updates

// Exponent Operator

let number = Math.pow(10, 3);
console.log(number);

// Concatenation vs String Literals
// Concatenation -> Double qoure and Plus sign

let name = "John";
let age = 10;
console.log("Hello my name is " + name + ". And I am " + age + " Years old");

// ${} and backticks
console.log(`Hello my name is ${name}. And I am ${age} years old`);

let num1 = 5;
let num2 = 10;

console.log(`The total is ${num1 + num2}.`);

// Arrow Function
const hello = () => {
    console.log("Hello world");
}

hello();

const sum = (x, y) => {
    console.log(x + y);
}

sum(10, 20);

// If-else vs shorthand if-else

let num3 = 5;

if(num3 % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}

(num3 % 2 == 0) 
? 
console.log("Even") 
: 
console.log("Odd");