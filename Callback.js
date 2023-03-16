// Object is created with attributes name(str) and age(int)
const obj = {
    name: `John`,
    age: 38
  }
  
  // Function sentence takes in two parameters
  // 1. A callback function aka a deactivated function
  // 2. An object defined as null by default
  function sentence(func1, object=null) {
    /* The callback function is activated and the object parameter is passed
    to this function. The return value of the function is stored in a variable
    called arr */
    let arr = func1(object)
    // Values are accessed from the value name "arr" using array syntax
    return `${arr[0]} is ${arr[1]} years old.`;
  }
  
  // Function takes in an object parameter with a default value of null
  function getObjValues(object=null) {
    // Object parameters are accessed using optional chaining
    return [object?.name, object?.age];
  }
  
  // Testing function getObjValues
  console.log(getObjValues(obj))
  // Testing the function sentence
  console.log(sentence(getObjValues,obj))