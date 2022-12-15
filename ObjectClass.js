//Created a list of objects for further iteration
const chara1 = {
    age: 29,
    gender: `Male`,
    skill: `Crafting`,
    score: 14
  }
  
  const chara2 = {
    age: 58,
    gender: `Female`,
    skill: `Alchemy`,
    score: 30
  }
  
  const chara3 = {
    age: 19,
    gender: `Female`,
    skill: `Mining`,
    score: 19
  }
  
  const chara4 = {
    age: 92,
    gender: `Male`,
    skill: `Research`,
    score: 28
  }
  
  const chara5 = {
    age: 32,
    gender: `Male`,
    skill: `Bartering`,
    score: 56
  }
  
  const chara6 = {
    age: 67,
    gender: `Male`,
    skill: `Enchanting`,
    score: 28
  }
  
  const chara7 = {
    age: 27,
    gender: `Female`,
    skill: `Farming`,
    score: 72
  }
  
  const chara8 = {
    age: 64,
    gender: `Female`,
    skill: `Smithing`,
    score: 17
  }
  
  const chara9 = {
    age: 18,
    gender: `Male`,
    skill: `Thievery`,
    score: 50
  }
  
  const chara10 = {
    age: 38,
    gender: `Male`,
    skill: `Gambling`,
    score: 92
  }
  
  const chara11 = {
    age: 47,
    gender: `Female`,
    skill: `Occultism`,
    score: 28
  }
  
  const chara12 = {
    age: 54,
    gender: `Female`,
    skill: `Carpentry`,
    score: 19
  }
  
  //Created class to iterate through chara objects and display their attributes
  class allPlayers {
    constructor(players) {
      this.players = players;
    }
    
    //Condenses all chara objects into a list using forEach method
    listPlayers() {
      this.players.forEach(player => {
        console.log(`${player.skill} ${player.score}`)
      })
    }
    
    //Setter method that allows the chara score to be updated
    updateScore(value, player) {
      player.score = value + player.score;
    }
  }
  
  //Iterated objects through an array to display them in a list
  const everyPlayer = [chara1, chara2, chara3, chara4, chara5, chara6, chara7, chara8, chara9, chara10, chara11, chara12];
  
  //Creates a new instance of the allPlayers class for objects to be pushed in
  const characters = new allPlayers(everyPlayer);
  
  characters.updateScore(23, chara12)
  console.log(chara12)
  characters.listPlayers()