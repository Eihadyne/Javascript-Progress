/*1)
Write a function that takes an array of 
strings and returns an object
with the frequency 
of each word in the array.
*/
// Example usage
const words0 = ["hello", "world", "hello", "javascript"];
// Output: { "hello": 2, "world": 1, "javascript": 1 }
//code here

// Function that takes in an array of strings and outputs the frequency in
// an object
function frequencyOfString(strArray) {
  // Created an object that will store the string and it's frequency
  const frequency = {};
  // forEach method iterates through the strings inside the array
  strArray.forEach(word => {
    // Checks if string exists within object and, if so, adds 1 to the value
    if (frequency[word]) {
      return frequency[word] = frequency[word] + 1;
    } else {
      // If string does not exist within object, it will be created
      return frequency[word] = 1;
    }
  })
  // Returns the object with the strings as a key and their value
  return frequency;
}

// Logs the object
console.log(frequencyOfString(words0))