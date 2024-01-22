// Purpose: Check if Friend List 1 & 2 have similar friends

// Friend List #1
const bobsFollowers = ["Mark", "Matt", "Ryan", "Jeffory"];
// Friend List #2
const tinasFollowers = ["Stephanie", "Ryan", "Jeffory"];

// New Empty Array
let mutualFollowers = [];

// Loop through Bob's list first.
for (let i = 0; i < bobsFollowers.length; i++){
  // Nested Loop through Tina's list second.
  for (let j = 0; j < tinasFollowers.length; j++){
    // Check if Bob's friend is also Tina's friend.
    if (bobsFollowers[i] === tinasFollowers[j]){
      // Push friend in common to Mutual Followers List.
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}

// Print results to the console.
console.log(mutualFollowers);
