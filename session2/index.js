// console.log("Hello, World!");

//JS Basic Function

function sayHello(){
    console.log("Hello!");
}

// Function caling // Invocation

sayHello();
sayHello();
sayHello();
sayHello();

function completeName(){
    // Local Scoped -> full name. It is inside the function
    let fullName = "Juan Dela Cruz";
    console.log(fullName);
}

completeName();
// console.log(fullName);

// Global and Local Scope Variables

// Global Scope
let age = 20;

{
    // local scoped
    const pi = 3.14
    console.log(age);
}

// Accessing the variable inside the curly braces
// console.log(pi); -> error not defined

let studentName = "Marry Poppins";

function getName(){
    let age = 50;
    console.log(studentName + " age is " + age);
}

getName();

// Function with Alert

function helloAlert(){
    alert("Hello, World!");
}

// IT is not necessary to call a function in the js file. We can also call a function in the Console Panel

// Function with prompt()

function enterName(){
    let inputName = prompt("Please Enter Your Name");
    console.log("Hello there, " + inputName + "!")
}


// Parameterized Functions
// Parameters are variable-like code. It can gather client/user inputs

function FullName(name){
    console.log("Welcome, " + name + "!");
}

// Function Invocation with argument
FullName("Joey");

function introduceYourPet(name, breed, age){
    console.log("My pet name is " + name);
    console.log("She is a " + breed);
    console.log("She is " + age + " Months Old.")
}

introduceYourPet("Batching", "Puspin", 7);
introduceYourPet("Bondat", "Puspin", 3);