// CODE 2 --- Array length //

// Function that takes in a value and returns it's length
const strLength = string => {
    return string.map(str => str.length);
  }
  
  // Stored array of words within variable
  const strarray = [`hello`, `world`, `how`, `are`, `you`, `doing`, `today`, `woohoo`]
  
  // Function created above take in variable of words and displays their length
  console.log(strLength(strarray))