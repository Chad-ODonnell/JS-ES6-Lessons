// Define our original Array.
const concept = ['arrays', 'can', 'be', 'mutated'];

// Function which alters index value 3 of pass-by-referrence array.
function changeArr(arr){
  arr[3] = 'MUTATED';
}

// Call changeArr array with Concept array argument.
changeArr(concept);
// Log newly altered concept array.
console.log(concept);

// Using the Function Expression w/ Arrow Operations pop the pass-by-referrence array.
const removeElement = (newArr) => newArr.pop();
// Call removeElement function.
removeElement(concept);

// Log the newly altered concept array.
console.log(concept);
