// Stored arrays within a variable for iteration
const arr1 = [1,3,2,5,6,3,7,"H",6,8,6,9,0]
const arr2 = [1,3,2,5,"V",6,3,7,6,8,6,9,0]

// Created a function that only takes the string from array as well as the index
function findIndex(array) {
  // Initializes letter variable 
  let letter;
  // Initiates an index variable for iteration
  let index = 0;
  // Updates above variable with the index of the string
  let updateIndx;
  // forEach function iterates through array
  array.forEach(arr => {
    // Boolean that detects if a string is found within array
    if (typeof arr === `string`) {
      // Stores string within letter variable declared above
      letter = arr;
      // Index of string is stored within index variable
      updateIndx = index;
    } else {
      // Loops through array until string index is found
      index = index + 1
    }
  })
  // Returns both the letter found as well as the index
  return `Letter ${letter} is located at ${updateIndx}`
}

// Logs output of function
console.log(findIndex(arr1))
console.log(findIndex(arr2))