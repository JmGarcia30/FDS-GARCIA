// Non-Mutator Method

let countries = ["US", "PH", "CAN", "SG", "TH", "PH", "FR", "DE"];

// indexOf()

let indexOf = countries.indexOf("PH");
console.log("IndexOf: " + indexOf);

let indexOf2 = countries.indexOf("BR");
console.log("IndexOf: " + indexOf2);

let indexOf3 = countries.indexOf("CAN");
console.log("IndexOf: " + indexOf3);

// lastIndexOf

let lastIndexOf = countries.lastIndexOf("PH");
console.log("lastIndexOf: " + lastIndexOf);

let lastIndexOf2 = countries.lastIndexOf("PH", 6);
console.log("lastIndexOf: " + lastIndexOf2);

let lastIndexOf3 = countries.lastIndexOf("PH", 3);
console.log("lastIndexOf: " + lastIndexOf3);

// slice()
let sliceA = countries.slice(2);
console.log("Result from sliceA: " + sliceA);

let sliceB = countries.slice(2, 4);
console.log("Result from sliceB: " + sliceB);

let sliceC = countries.slice(-3);
console.log("Result from sliceC: " + sliceC);

// concat()
let taskA = ["drink html", "eat javascript"];
let taskB = ["inhale css", "breathe sass"];
let taskC = ["get git", "be node"];

let task = taskA.concat(taskB);
console.log(task);

let allTask = taskA.concat(taskB, taskC);
console.log(allTask);

let combinedTask = allTask.concat("smell express", "throw react");
console.log(combinedTask);

// iteration method
// forEach();

allTask.forEach(function(task){
    console.log(task); 
})

let filteredTask =[];

allTask.forEach(function(task){
    if(task.length > 10){
        filteredTask.push(task);
    }
})

console.log(filteredTask);

let numbers = [1, 2, 3, 4, 5];
// every()

let allValid = numbers.every(function(number){
    return number < 3
})

console.log(allValid);

// some()
let someValid = numbers.some(function(number){
    return number < 4
})

console.log(someValid);

// filter()
let filterValid = numbers.filter(function(number){
    return number <= 3
})

console.log(filterValid);