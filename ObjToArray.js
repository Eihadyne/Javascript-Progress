// CODE 3 --- Object to Array //

// Created a couple of objects that contain a person's name and surname
const ppl = {
    name: `Keanu`,
    surname: `Mccall`
  }
  
  const ppl2 = {
    name: `Alisa`,
    surname: `Lester`
  }
  
  // Stored their first name within a variable
  const people = ppl.name + ` ` + ppl2.name;
  
  // Function takes value and stores it within an array using .push
  const objtoArr = array => {
    let arrayer = []
    arrayer.push(array)
    return arrayer
  }
  
  // Returns variable of obj names and pushes them into an array
  console.log(objtoArr(people))