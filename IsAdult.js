// Function takes in object and checks if age of object is over 18 and states if they're
// an adult or minor.

function checkCategory(obj){
    if(obj.age>=18){
       return "Adult";
     } else {
       return "Minor"
     }
 }
 
  // Function maps previous category object to the people object via deconstruction
 function unknownNamee(arr){
   return arr.map(obj => {
    const category = checkCategory(obj)
    return {...obj,category}
           
   }
   )
 }
 
 // Logs result
 console.log(unknownNamee(people))