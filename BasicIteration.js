const grades1 = {
    sname: `Sena`,
    fname: `Lanz`,
    date: `7th Oct`,
    grade: 182,
    subject: `Maths`
  }
  
  const grades2 = {
    sname: `Taion`,
    fname: `Eunie`,
    date: `8th Oct`,
    grade: 329,
    subject: `Tactics`
  }
  
  const grades3 = {
    sname: `Mio`,
    fname: `Noah`,
    date: `9th Oct`,
    grade: 420,
    subject: `Offseeing`
  
  }
  
  const grades4 = {
    sname: `Manana`,
    fname: `Riku`,
    date: `10th Dec`,
    grade: 209,
    subject: `Cooking`
  }
  
  const grades5 = {
    sname: `Valdi`,
    fname: `Ashera`,
    date: `25th Mar`,
    grade: 192,
    subject: `Engineering`
  }
  
  const allgrades = [grades1, grades2, grades3, grades4, grades5]
  
  function studentGrades(obj) {
    console.log(`${obj.fname} ${obj.sname} scored ${obj.grade} in the subject ${obj.subject}`)
  }
  
  allgrades.forEach(allgrade => {
    studentGrades(allgrade)
  })  