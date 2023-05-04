// Created an array which contains various numbers
const numbers0 = [1, 2, 3, 4, 5, 6];

// Function uses filter method to find even numbers within an array
function findEvens(arr) {
  const even = arr.filter(arr => arr % 2 === 0);
  return even;
}

// Function uses reduce method to sum even numbers using previous function
function sumEvens(arr) {
  const even = findEvens(arr)
  const sum = even.reduce((total, current) => {
    return total + current;
  }, 0)
  return sum;
}

// Logs result
console.log(sumEvens(numbers0))