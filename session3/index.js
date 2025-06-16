// Selection Control Structure
//1. Conditional Statement

let num1 = 5;

if(num1 < 3){
    console.log("Hello!");
}

// For the if statement to work, the condition must be "true"

if(num1 > 1){
    console.log("If statement");
}

console.log(num1 > 1);

// else statement

let num2 = Number (prompt("Enter a Number: "));
if(num2 == 10){
    console.log("num 1 is equal to 10");
}else{
    console.log("num 1 is not equal to 10");
}

// else if

let isLegalAge = false;
let isWorking = false;
// true = 1. false = 0
if(isLegalAge == 1 && isWorking == 1){
    console.log("User is of the legal age and working.");
}else if(isLegalAge == 1 && isWorking == 0){
    console.log("User is of the legal age and is not working.");
}else if(isLegalAge == 0 && isWorking == 1){
    console.log("User is not of the legal age but is working.");
}else{
    console.log("record cannot be assessed")
}

// Functions with conditional statement
function checkGender(gender){
    let formatted_gender = gender.toUpperCase();
    if(formatted_gender === 'M'){
        console.log("Male");
    }else if(formatted_gender === 'F'){
        console.log("Female");
    }else{
        console.log("Others");
    }
}

checkGender(prompt("Enter your Gender: "));

// 2. Switch Case statement

let color = prompt("Please Enter r, g, or b for color").toLowerCase();

switch (color){
    case 'r':
        console.log("You selected RED");
        break;
    case 'g':
        console.log("You selected GREEN");
        break;
    case 'b':
        console.log("You selected BLUE");
        break;
    default:
        console.log("The selected color is not recognized ")
}   