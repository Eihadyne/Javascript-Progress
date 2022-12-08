// Creates a class called Bank with attribute User
class Bank {
    constructor(user){
      this.user = user;
    }
    
    // Function receives balance of User and withdraws amount required as well as date
    // and time of withdrawal
    withdraw(amount){
      const date = new Date()
      const newDate = `${date.toDateString()} ${date.toTimeString().slice(0,8)}`
      if (this.user.balance >= amount) {
        this.user.balance = this.user.balance - amount;
        this.user.history.push([`- ${amount}`, newDate]);
        console.log(`You have withdrawn ${amount}.`)
      } else
        console.log(`You have no funds in your account.`)
  
    }
    
    //Logs total balance of User
    balance(){
      console.log(`You have ${this.user.balance} left.`)
    }
    
    // Adds amount to user balance as well as logging date and time of deposit
    addMoney(amount){
      const date = new Date()
      const newDate = `${date.toDateString()} ${date.toTimeString().slice(0,8)}`
      this.user.balance = this.user.balance + amount;
      this.user.history.push([`+ ${amount}`, newDate]);
      console.log(`You've added ${amount} to your account.`)
    }
    
    // Checks transaction history, displays all deposits and withdrawals as well
    // as their date and time. Uses boolean variable to detect whether it's a w/d.
    transactionHistory(){
      this.user.history.forEach(hist => {
        const boolplus = hist[0].includes(`+`);
        if (boolplus) {
          console.log(`You added ${hist[0]} to your account on ${hist[1]}.`)
        } else {
          console.log(`You withdrew ${hist[0]} on ${hist[1]}.`)
        console.log(hist[1])
        }
      })
    }
    
  }
  
  // User object that contains their balance and history.
  const user = {
    balance: 100,
    history: []
  }
  
  // Displays deposits or withdrawals.
  const natwest = new Bank(user)
  natwest.withdraw(10)
  console.log(user.balance)
  natwest.withdraw(20)
  console.log(user.balance)
  natwest.addMoney(5)
  console.log(user.balance)
  natwest.addMoney(10)
  console.log(user.history)
  natwest.transactionHistory()