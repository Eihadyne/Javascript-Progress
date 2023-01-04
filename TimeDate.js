// Establishes new class Date 
const data = new Date();

//Iterates days of the week within array
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]

//Function that returns day of the week
data.getDay()

//Function that returns hour of the day
data.getHours();

//Function that returns current minute of the day
data.getMinutes();

//Function returns month of the year
data.getMonth();

//Function returns current year
data.getYear();

//Created variable to display hour
const hour = data.getHours();

//Created variable to display minutes
const min = data.getMinutes();

//Logging the current day and time with template strings
console.log(`The day is ${days[data.getDay()]}.`)
console.log(`The time is ${hour}:${min}.`)