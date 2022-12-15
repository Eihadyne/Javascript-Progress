//Boolean check for game data
let data = true;

//Creating a promise that resolves if data is true and rejects when false
const LoadGame = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (data) {
        resolve();
    } else {
        reject();
    }
  },1000)
  })
}

//Callback promise and output necessary info
LoadGame(data)
.then(() => {
  console.log("Game loaded.")
})
.catch((error) => {
  console.error("Couldn't load.")
})
.finally(() => {
    console.log("Have fun!")
})