/*4)
Write a function that takes an array
of numbers and returns a new array 
with the numbers sorted in descending 
order, and then filtered to remove 
any numbers that are less than 10.
*/
// Example usage
const numbers0 = [2, 3, 15, 8, 11, 5, 10];
// Output: [15, 11, 10]

//code here

// Created a function that sorts an array of numbers in descending order as well
// as filters to remove numbers less than 10
function numberSortFilter(arr) {
  // Sort method allows array of numbers to output in descending order
    const sort = arr.sort((a, b) => b - a)
    // Filter method removes numbers less than 10
    return sort.filter(arr => arr > 9)
}

// Logs output
console.log(numberSortFilter(numbers0))
