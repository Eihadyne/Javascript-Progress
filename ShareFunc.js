// Created a function that upper cases string input using map func
function stringUpper(strings) {
    return strings.map(string => string.toUpperCase());
  }
  
  /* Created a function that stores prev function in variable and obj that
  displays strings in upper case as well as it's length */
  function strLength(strings) {
    const upper = stringUpper(strings);
    const length = upper.map(up => up.length)
    const obj = {
      upper,
      length
    }
    return obj;
  }
  
  // Logs result of strLength function
  console.log(strLength([`one`, `two`, `three`]))