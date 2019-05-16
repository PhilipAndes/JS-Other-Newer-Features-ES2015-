// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100); // number
set1.add('A string'); // String
set1.add({name: 'John'}); // Object
set1.add(true); // Boolean
// if you would add: set1.add(100); again, it wont show because it is already there
console.log(set1);

// If you don't want to add things this way you can do it this way:
const set2 = new Set([1, true, 'String']);
console.log(set2);

// Get count
console.log(set1.size); // 4

// Check for values
console.log(set1.has(100)); // true
// We can even use an expression that equals 100
console.log(set1.has(50 + 50)); // =100 so true

console.log(set1.has({name: 'John'})); // False, because this is an reference object and not a primitive value that is actualy stored

console.log({name: 'John'} === {name: 'John'}); // False, because it is not a primitive type like a number, a string, a boolean etc
console.log('John' === 'John'); // true, because now it is a string

// Delete from set:
set1.delete(100);
console.log(set1); // 100 is deleted

// Iterate through sets:
// For...of loop:
for(let item of set1) {
    console.log(item); // will everything thats in there, so; a string, a object and true. 100 will not show because we deleted it above
};

// We can also use: 
// for(let item of set1.values()) // get the same thing
// for(let item of set1.keys()) // get the same thing
// for(let item of set1.entries()) // get an array

// We can also use a forEach loop:
set1.forEach((value) => {
   console.log(value);
});

// Just as with MAPS we can convert the set to an Array:
const setArr = Array.from(set1);
console.log(setArr);