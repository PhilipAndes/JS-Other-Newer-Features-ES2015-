// Destructuring Assignment

// Lets initialize a variable
let a, b;
// Set some brackets and set it equal to an array:
[a, b] = [100, 200];
console.log(a); // 100 , console.log(b); // 200

// Rest pattern:
// so lets say we want a to be 100, b to be 200, and we have some other values like 300, 400 and 500, then we want a variable to be called ...rest (the 3 dots which is actually called the spread operator), this is going to asign everything that is left over into an array into a variable called rest
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); // we have an array that has the 3 values that are left over, if you would say; [a, b, c, ...rest] = [100, 200, 300, 400, 500]; you would get an array with the last 2 values

//////////////////////////////////////////////////////////////////////////

// We can also do this with objects:
// We use paretheses to make this an expression
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b); //100, 200

// We can use rest pattern here as well:
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(rest);

//////////////////////////////////////////////////////////////////////////

// Lets go further into array and object destructuring in a way that we would actualy use it:

// Array destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3); // John Beth Mike

//////////////////////////////////////////////////////////////////////////

// Parse array returned from function:
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// // Initialize persons
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

//////////////////////////////////////////////////////////////////////////

// Object Destructuring 

const person = {
    name: 'John Doe',
    age: 30,
    city: 'Miami',
    gender: 'Male',
    sayHello: function() {
        console.log('Hello');
    }
}

// Old ES5 way:
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();
