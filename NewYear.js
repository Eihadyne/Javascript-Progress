// Establishing Date class variable
const date = new Date();

//Iterating days of the week within array
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]

//Iterating months of the year within array
const months = [`December`, `January`, `February`, `March`]

//Returns current day
date.getDay();

//Returns current hour
date.getHours();

//Returns current minute
date.getMinutes();

//Returns current month
date.getMonth() + 1;

const month = date.getMonth() + 1;

const writmonth = months[month];

// Returns current year
date.getFullYear();

const year = date.getFullYear();

//Returns date
date.getDate();

const data = date.getDate();

const day = days[date.getDay()];

//Logs current day as well as the date, month and year
console.log(`The day is ${day} and the date is ${data}/${month}/${year}.`)

//Creates a student object
const student = {
  name: `William`,
  surname: `Shakespeare`,
  subject: `English`
}

//Logs student parameters, displays the current day and their subject
console.log(`Happy New Year ${student.name}! Today is ${day} and you are studying ${student.subject}.`)