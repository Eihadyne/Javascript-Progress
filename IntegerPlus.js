//Function that checks if parameter is int and adds 1
function num(a) {
    //Boolean that checks if parameter equals integer
    if((a === parseInt(a))) {
      return a + 1
    } else {
      //Returns 'NaN' if not
      return `Not a number`
    }
  }
  
  //Logs result if int given or displays 'NaN'
  console.log(num(28))
  console.log(num(`hello`))