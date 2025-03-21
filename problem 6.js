// Ask if the user wants to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)");

if (createList.toLowerCase() === "y") {
    // Ask for the number of items
    let itemCount = prompt("How many items do you want to add?");
    let groceryList = [];

    // Loop to get the items
    for (let i = 0; i < itemCount; i++) {
        let item = prompt("Enter item " + (i + 1) + ":");
        groceryList.push(item);
    }

    // Sort and reverse the list
    let groceryList_Sort = [...groceryList].sort();
    let groceryList_Reverse = [...groceryList].reverse();

    // Show the lists
    alert("Original List: " + groceryList.join(", "));
    alert("Sorted List: " + groceryList_Sort.join(", "));
    alert("Reversed List: " + groceryList_Reverse.join(", "));
}
