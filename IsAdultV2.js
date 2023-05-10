/*2)
Write a function that takes an array of
objects with name and age properties, 
and returns an array of objects with 
the same properties, but with an 
additional property ageGroup, 
which is "Child" if the person 
is younger than 13, "Teen" if the
person is between 13 and 19,
or "Adult" if the person is 20 or older.
*/
// Example usage
const people = [
    { name: "John", age: 32 },
    { name: "Jane", age: 16 },
    { name: "Bob", age: 45 },
    { name: "Alice", age: 8 }
  ];
  
  // Output: [
  //   { name: "John", age: 32, ageGroup: "Adult" },
  //   { name: "Jane", age: 16, ageGroup: "Teen" },
  //   { name: "Bob", age: 45, ageGroup: "Adult" },
  //   { name: "Alice", age: 8, ageGroup: "Child" }
  // ]
  
  //code here
  
  // Creates a function that takes in an array object and checks the
  // age value to determine if adult, teen or child
  function checkAge(arr) {
    if (arr.age < 13) {
      return "Child"
    } else if (arr.age > 13 && arr.age < 19) {
      return "Teen"
    } else {
      return "Adult"
    }
  }
  
  // Creates a function that maps the object and adds new category
  function addGroup(obj) {
    // Maps object according to rules set within prev arr function
    return obj.map(arr => {
      // Variable contains previous function
      const ageGroup = checkAge(arr);
      // Attaches ageGroup catefory store in variable to end of each object
      // name and age
      return {...arr, ageGroup};
    })
  }
  
  // Logs the output
  console.log(addGroup(people));