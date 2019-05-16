// Each symbol is unique and thats why they are a very valuable as object properties indentifiers 
// This is the main purpose of symbols

// Create a symbol
// As you see it is a primitive value so it doesnt need 'new'
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1); // Symbol()
console.log(sym2); // Symbol with the indentifier sym2


// Lets look at the type:
console.log(typeof sym2); // symbol, which tells us this is a primitive data type, it doenst return the type object or anything like that, it is a pure primitive type

// No 2 symbols can be the same, for example:
console.log(Symbol() === Symbol()); // False, they can never be the same!
// even with the same indentifier:
console.log(Symbol('123') === Symbol('123')); // Still False

// try to use a symbol in a string:
//console.log(`Hello ${sym1}`); // error 

// To do this we can do:
//console.log(`Hello ${String(sym1)}`);

// or:
console.log(`Hello ${sym1.toString()}`);

//////////////////////////////////////////////////////////////////////////

// So lets go into the main reason for symbols, which is:
// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym3');

// Lets create an object:
const myObj = {};

// Normally you would use:
//myObj.KEY1 = 'Prop1'; // In this case it is just looking at it as a normal property

// If you want to use an actual variable then you want to use the bracket syntax
myObj[KEY1] = 'Prop1'; // now we using the symbol as a property
myObj[KEY2] = 'Prop2';

// We add some to the myObj for the for...in loop below, but we are not going to use a symbol so it is just going to be a simple property
myObj.key3 = 'Prop 3';
myObj.key4 = 'Prop 4';  

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// There are some things that work a little different with symbols, for one, if we would want to loop true myObj using for in then it wouldnt show up in the iteration because they are not enumerable in for in iterations:

// Symbols are not enumerable in for...in
for(let i in myObj) {
    // i will give us the key
    // To get the value we say myObj[i]
    console.log(`${i}: ${myObj[i]}`);
    // as you can see we only get key3 and key4, because as mentioned above, symbols are not enumerable in for...in loops
}

// Another thing, Symbols are ignored when using json.stringify
// What json.stringify does, it takes javascript object literal and turns it into a json string

// Symbols are ignored by json.stringify:
console.log(JSON.stringify({key: 'prop'})); // will show as JSON string
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // empty object