
const strings = ["hello", "world", "how", "are", "you"];

// Function takes in an array and filters the strings
// based on whether they contain a certain letter
function eOnly(obj) {
  // Filter func uses includes method to output strings
  // containing the letter `e`
  return obj.filter(obj = obj.includes(`e`))
}

// Logs the result
console.log(eOnly(strings))
