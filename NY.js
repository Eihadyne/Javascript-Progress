// Created a student object to iterate
const student = {
  name: `Albert`,
  surname: `Einstein`,
  subject: `Science`
}

// Placing student object within an array
const students = [student]

// Function that gets the day, month and year
function dates() {
  const date = new Date();
  const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
    const obj = {
      day: days[date.getDay()],
      month: date.getMonth() + 1,
      year: date.getFullYear()
 }
 return obj
} 

// Displays New Year greeting for student objects
students.map(ppl => {
  console.log(`Happy New Year ${dates().year} ${ppl.name} ${ppl.surname}! Today is ${dates().day}.`)
})