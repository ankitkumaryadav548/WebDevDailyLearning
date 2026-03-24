function createBankAccount(balance) {
     return function (amount) {
         balance += amount
          console.log(balance)
         }
         }
         
const account = createBankAccount(1000)
 account(200)