/* 1) Write a function that takes an array of strings below
and returns a new array with 
the first letter of each string capitalized.*/
const strings = ['hello', 'world', 'how', 'are', 'you'];


// code below:

/* Function takes in an object which is mapped into separate variables
for capitalisation process */
const capitalizeFirst = obj => {
  return strings.map(string => {
    // charAt searches for specific element within string to capitalise
    const capitalFirst = string.charAt(0).toUpperCase();
    // slice removes rest of the elements to then lowercase them
    const lowercaseRest = string.slice(1).toLowerCase();
    // Returns both capitalised first letter and rest of lowercase letters
    return capitalFirst + lowercaseRest;
  })
}

// Logs strings array according to function
console.log(capitalizeFirst(strings))

/* 2 Write a function that takes an array of objects given below 
and returns an array of strings in the 
format "<name> is <age> years old".
*/

const people = [
  { name: 'John', age: 32 },
  { name: 'Jane', age: 24 },
  { name: 'Bob', age: 45 }
];


// code below:

// Code takes in object, maps it and displays their name and age in a line
const names = obj => {
  return obj.map(people => {
    return `${people.name} is ${people.age} years old`
  })
}

// Logs object according to function
console.log(names(people))

/* Write a function that takes an object below
 and returns a string 
in the format "<name> is <age> years old".
*/
const person = { name: 'John', age: 32 };


// code below:

// Function takes in an object and displays their name and age in a line
const personDescription = obj => {
  return `${obj.name} is ${obj.age} years old`
}

// Logs object according to function
console.log(personDescription(person))

/*Write a function that takes the string below
and returns the reverse of the string.
 you will need to use/chain the follwoing in build string 
 methods:
 split()
 reverse()
 join()
*/
const string = 'hello';

// code below:

// Function takes in a string which is then reversed
function reverse(obj) {
  // Split method splits elements of string and converts them to array
  const split = obj.split(``)
  // Reverse method is self-explanatory. Can only reverse an array
  const reverse = split.reverse()
  /* Join method adds all elements back together as well as converting them
  back into a string */
  const join = reverse.join(``)
  return join
}

// Logs reversed string
console.log(reverse(string))

/*
Write a function that takes an array 
of numbers below and returns a new array 
with only the numbers greater than 5.
*/
const numbers = [1, 7, 3, 8, 2, 9, 4, 6];

// code below:

// Function that takes in array of numbers
function greaterThanFive(obj) {
  // filter method filters numbers in array that are greater than five
  return obj.filter(obj => obj > 5);
}

// Logs array with numbers greater than five
console.log(greaterThanFive(numbers))