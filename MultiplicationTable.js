// Function checks if input is integer and places it in a multiplication table
function multiply(a) {
  // Array that contains numbers to multiply from 1 - 12
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  // Boolean checks if input is an integer
  if ((a === parseInt(a))) {
    // Maps integer input into a multiplication table
    return table.map(tab => {
        return `${tab} x ${a} = ${tab * a}`
      })
  } else {
    // Returns NaN if input isn't an integer
    return `Not a number.`
  }
}

// Logs input integer and displays the multiplication table or NaN if not
console.log(multiply(6))
console.log(multiply(`hello`))