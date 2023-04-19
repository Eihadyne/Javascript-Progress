// CODE 1 --- Sqauring array //

// Function takes in array, or any number, and returns it's multipled value
function squareArr(array) {
    return array.map(arr => arr ** 2)
  }
  
  // Stored array of numbers within a variable
  const newarr = [1, 2, 3, 4, 5]
  
  // Function created above takes in variable of arrays and multiplies them
  console.log(squareArr(newarr))  