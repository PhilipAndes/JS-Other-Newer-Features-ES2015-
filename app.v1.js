// Iterators are like advanced loops that can be paused. 

// Generators are functions that can be paused and can return multiple values.

// Iterator Example:
function nameIterator(names) {
    let nextIndex = 0;

    // From this function we want to return an object, that has a next function:
    return {
        next: function() {
            // In the next function we want to return, based on a conditional, we are going to use the ternary operator 
            // Basicaly we say, if next index (which is zero) is less then names.length (whatever is passed in to the iterator above!) then, we want value, return an object that has a value of whatever that names index is; names[nextIndex++]  
            //++ plus 1, we gonna iterate it by 1
            // then we want a done value of false, meaning there is still more to iterate true
            // : else we want return an object that is done: true
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false } :
            { done: true}
        }
    }
}

// Create an array of names:
const namesArr = ['Jack', 'Jill', 'John'];
// Initialize the iterator and pass in the names array:
const names = nameIterator(namesArr);

// so now we can this variable names and iterate true it:
//console.log(names.next());

// This will give us a object with the value of Jack and done: false, because if we look at the function above, it will return nextIndex is smaller then names.length so return the value of names and done: false

// if you want the value you would say:
console.log(names.next().value); // Outputs Jack
// if we want the next one we would just copy it again:
console.log(names.next().value); // Outputs Jill
// And again 
console.log(names.next().value); // Outputs John
// As you can see it is iterating true the array each time we call this

console.log(names.next().value); // Outputs undefined, because there is none, if you would remove the value: console.log(names.next()); it would output done: true

//////////////////////////////////////////////////////////////////////////

// Generator Example:
// To make it a actual generator we have to put * after function:
function* sayNames() {
    // In this function we can do whatever we want, and then we can yield values from it:
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}
// Now we have a generator function, so what we have to now, is asign a variable to this generator:

const name = sayNames();

//console.log(name.next());
// We get the same as in the iterator, thats why they are very similair, they are just setup differently

// If we want the value only, we can just use:
console.log(name.next().value); // Jack
console.log(name.next().value); // Jill
console.log(name.next().value); // John
console.log(name.next().value); // Undefined, or without the value: console.log(name.next()); done: true

//////////////////////////////////////////////////////////////////////////

// Lets do another example, lets say we want a function or an generator to generate ID's:

// ID Creator:
function * createIds() {
    let index = 1;

    while(true) {
        // While true is always gonna be true, then we want to yield the index value which is 1, ++ so increment it by 1, each time we loop true the while loop. 
        yield index++;
    }
}

const gen = createIds();

// It will keep generating +1 
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 5





