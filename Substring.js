// Function that outputs first 3 letters of a string
function getChara(a) {
    // typeof method checks if value is string
    if (typeof a === `string`) {
      //substring outputs the first 3 letters of string
        return a.substring(0, 3)
    } else {
      // Returns this if value isn't string
        return `Not a string`
    }
  }
  
  // Function that takes the first letter of a string and capitalizes it
  function upperCase(a) {
    // typeof method checks if value is string
    if (typeof a === `string`) {
      // Uses the slice method to capitalize the first letter
      const first = a.slice(0, 1).toUpperCase()
      // Uses the slice method to lowercase the rest of the letters
      const second = a.slice(1).toLowerCase()
      // Returns string via methods within variables
       return `${first}${second}`
    } else {
      // Returns this if value isn't a string
       return `Not a string`
    }
  }
  
  // function variety(a, b) {
  //   if (typeof a === `number` && typeof b === `string`) {
  //     const first = b.slice(0, 1).toUpperCase()
  //     const second = b.slice(1).toLowerCase()
  //     return a + `${first}${second}`
  //   } else {
  //     return `No number`
  //   }
  // }
  
  console.log(getChara(28))
  console.log(upperCase(5))
  // console.log(variety(18 `hello`))