// maps are a new object structure in ES6. 
// A map is an object that holds key-value pairs 
// Any value either it is a object reference type or a primitive can be used as a key or value
// What is a lot different then a object literal, we can use a object as a key
// Different ways we can iterate true them

const map1 = new Map();

// Set Keys
const key1 = 'some string'; // string
      key2 = {}; // empty object
      key3 = function() {}; // empty function

      
// Set map values by key
// use the set() method, we pass in the key, and the value to a string:
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by keys
// The way you do this, is with the get() method
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values:
console.log(map1.size); // 3 (for 3 key-value pairs in this map)

// Iterating true MAPS

// Loop using for...of to get keys and values:
for(let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Iterate keys only:
for(let key of map1.keys()) {
    console.log(key);
}

// Iterate values only:
for(let value of map1.values()) {
    console.log(value);
}

// We could also use a forEach loop:
map1.forEach(function(value, key) {
    console.log(`${key} = ${value}`);
});

//////////////////////////////////////////////////////////////////////////

// Convert to arrays

// Create an array of the key value pairs:
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of values only:
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of keys only:
const keyArr = Array.from(map1.keys());
console.log(keyArr);

