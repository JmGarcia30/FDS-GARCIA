const  groceryList = ["Eggs", "Milk", "Bread", "Oil", "Condiments"];

console.log("Items to buy:")
console.log(groceryList);

/*
    5. Create a function which is able to receive a single argument and add a grocery item at the end of the groceryList array.
        -function should be able to receive a single argument.
        -add the grocery item at the end of the array.
        -The function should not be able to return anything.
        -invoke and add an argument to be passed in the function.
        -log the groceryList array in the console.
*/
       
function addItem(item){
    groceryList[groceryList.length] = item;
    console.log(item + " Is added to the list")
}

addItem("Rice");
console.log(groceryList);

/*
    6. Create function which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.
*/

function getItemByIndex(index) {
    if(groceryList.length == 0 || groceryList == [] || index < 0 || index >= groceryList){
        console.log("The List is empty");
    }else{
        itemFound = groceryList[index];
        console.log("Item: " + itemFound);
    }
};

getItemByIndex(3);



/*
    7. Create function which is able to delete the last item in the array after it is bought and return the deleted item.
        -Create a function scoped variable to store the last item in the groceryList array.
        -Look up how to use .length property in accessing the last element of an array and extending/shortening an array.
        -Shorten the length of the array by at least 1 to delete the last item using .length property.
        -return the last item in the array which was stored in the variable.
*/

function deleteItem() {
    groceryList.length = groceryList.length -1
}

deleteItem();
console.log(groceryList);

/*
    8. Create function which is able to update a specific item in the groceryList array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -Log the groceryList array in the console.
*/

   
function updateItemByIndex() {

}

updateItemByIndex();
console.log(groceryList);
