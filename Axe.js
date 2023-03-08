// Created an object containing list of players
const player1 = {
  name: `Hikari`,
  surname: `Ku`,
  items: [`Sword`, `Shield`, `Axe`],
  coins: 350
}

const player2 = {
  name: `Partitio`,
  surname: `Yellowil`,
  items: [`Lance`, `Bow`, `Hat`],
  coins: 105
}

const player3 = {
  name: `Castti`,
  surname: `Florenz`,
  items: [`Axe`, `Journal`, `Herb`],
  coins: 10
}

const player4 = {
  name: `Osvald`,
  surname: `V. Vanstein`,
  items: [`Staff`, `Diary`, `Ashes`],
  coins: 6
}

const player5 = {
  name: `Temenos`,
  surname: `Mistral`,
  items: [`Stave`, `Bow`, `Sacred Flame`],
  coins: 18
}

// Function that checks if an Axe property exists within object's items key
function addAxe(obj) {
  // Checks if Axe already exists within items key
  if (obj.items.includes(`Axe`)) {
    return `${obj.name} already has an axe.`
    // Checks if player has enough coins to purchase an Axe
  } else if (obj.coins < 20) {
    return `${obj.name} does not have enough for an axe.`
    // If player has enough coins, deduct 20 and add Axe property to items
  } else {
    obj.coins = obj.coins - 20 
    obj.items.push(`Axe`)
    return `Axe has been added to ${obj.name}'s inventory.`
  }
}

//Logs result of function
console.log(player5)
console.log(addAxe(player5))