// Created a function that returns sum if it's integer
function sum(a, b) {
  // Boolean that checks if parameter is integer
  if((a === parseInt(a))&&(b === parseInt(b))) {
    return a + b
  } else {
    //Returns msg if result isn't an integer
    return `No number`
  }
}

//Logs result and returns sum or 'NaN'
console.log(sum(10, 28))
console.log(sum(`hello`, `world`))