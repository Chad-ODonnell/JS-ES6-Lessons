// Documentation @ https://www.codecademy.com/resources/docs/javascript/arrays/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

const removedFromShift = groceryList.shift();
console.log(groceryList);
console.log(`\nRemoved ${groceryList} from Grocery List Array: [${groceryList}]\n`);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1,4));
// Prints [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList);
// Prints original array w/o slice modifications "NON-MUTATING".

// Finds the location of a specific element value within the Array.
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
