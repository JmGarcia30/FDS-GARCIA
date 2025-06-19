// Array Mutator methods

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];

console.log(fruits);
console.log("Length: " + fruits.length);

// push()-> adds vaalue at the end of the array
fruits.push("Mango");
console.log("New set of data");
console.log(fruits);

fruits.push("Avocado", "Guava");
console.log("New set of data");
console.log(fruits);

// Function with array method
function addFruit(fruit){
    fruits.push(fruit);
    console.log(fruit + " is now added");
}

function displayFruits(){
    console.log(fruits);
    return fruits;
}

addFruit("Pineapple");
displayFruits();

// pop()-> removes data at the end of an array

fruits.pop();
console.log("New set of data");
console.log(fruits)

function removeFruit(){
    let removed = fruits.pop();
    console.log(removed + " Has been deleted.");
    // console.log(fruits[fruits.length - 1] + " is now removed")
}

removeFruit();
console.log("New set of data");
console.log(fruits);

// unshift()-> adds data at the beginning of an array

fruits.unshift("Lime", "Banana");
console.log("New set of data");
console.log(fruits);

// Function with array method
function unshiftFruit(fruit){
    fruits.unshift(fruit);
    console.log(fruit + " is now added");
}

unshiftFruit("Calamansi");
console.log("New set of data");
console.log(fruits);

// shift() -> removes element in the beginning of an array
fruits.shift();
console.log("New set of data");
console.log(fruits);

function shiftFruit(){
    let removed = fruits.shift();
    console.log(removed + " Has been deleted.");
    // console.log(fruits[fruits.length - 1] + " is now removed")
}
shiftFruit();
console.log("New set of data");
console.log(fruits);

// splice() -> adds/remove elements on a specified index number.
// array.splice(index#, deletecount, elementsToAdd);
fruits.splice(1, 2, "Lime", "Cherry")
console.log("New set of data");
console.log(fruits);

function spliceFruit(index, deleteCount, fruit){
    fruits.splice(index, deleteCount, fruit);
}

spliceFruit(3, 1, "Candy Blossom")
console.log("New set of data");
console.log(fruits);

spliceFruit(4, 0, "Moon Melon")
console.log("New set of data");
console.log(fruits);

// sort()-> rearranges array elements in alphanumeric order.
fruits.sort();
console.log("New set of data");
console.log(fruits);

// Function with returns
function sahod(rate, day){
    let total = rate * day;
    return total;
}

let result = sahod(1000, 5);
console.log(result);

function bonus(amount){
    let totalSalary = result + amount;
    return totalSalary;
}

let netIncome = bonus(1500);
console.log(netIncome);