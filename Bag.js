// Created two objects detailing a User and their inventory
const bag = {
    //Stores amount of nails within nested object
    items: [`Hammer`, `Spade`, `Axe`, {nails: 9}],
    user_name: `John`,
    weapon: ``,
  }
  
  const bag2 = {
    items: [`Hammer`, `Spade`, `Axe`, {nails: 12}],
    user_name: `Luke`,
    weapon: ``,
  }
  
  // Function outputs User's name and amount of nails
  function detail(obj) {
    const amount = obj.items[3].nails
    return `${obj.user_name} has ${amount} nails.`
  }
  
  // Logs User name and nails amount
  console.log(detail(bag))