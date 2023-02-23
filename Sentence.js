// Objects created for further iteration
const student1 = {
    firstName: 'Raymey',
    class: 10,
    age: 9,
};


const student2 = {
    firstName: 'Luke',
    class: 10,
    age:11
};

const student3 = {
    firstName: 'Sammuel',
    class: 12,
    age: 13,
};

// create a fucntion that is able to return name, class and age
// of a student object in a sentence 
function stuSentence(obj) {
  return `Student's name is ${obj.firstName}, their class is ${obj.class} and they're ${obj.age} years old.`
}

// Placed objects within an array to iterate through using map method
const array = [student1, student2, student3];

// Map function takes in stuSentence and outputs all students names, class and age
array.map(arr => {
  console.log(stuSentence(arr))
})