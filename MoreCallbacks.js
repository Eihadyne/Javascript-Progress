//this program was never completed 
//use your understanding of programming to finish this program

const obj = {
    name: `Lego`,
    cost: 192
  }
  
  
  function One(object=null){
    return object?.cost;
  }
  
  function Two(object=null){
    return [object?.name]; 
  }
  
  function final(callBackA, callBackB, object=null){
    const resultOne = callBackA(object)
    const resultTwo = callBackB(object)
    return `The cost of ${resultTwo[0]} is ${resultOne}`;
  }
  
  // Test final function
  console.log(One(obj))
  console.log(final(One, Two, obj))