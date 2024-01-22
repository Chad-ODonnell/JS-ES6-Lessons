// Example of changing a let Array & a const Array.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// Can change values/elements within let Array.
condiments[0] = "Mayo";
console.log(condiments);

// Can re-assign let Array!!
condiments = ["Mayo"];
console.log(condiments);

// Can also change values/elements within const Array.
utensils[3] = "Spoon";
console.log(utensils);

// Cannot re-assign const Array!!
// Will Error Out!
