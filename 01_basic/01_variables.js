const accountId = 144553 
let accountEmail = "mayur@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

/*
Prefere not to use var
because of issue in block scope and functional scope
*/

accountEmail = "mk@gmail.com"
accountPassword = "232545"
accountCity = "Pune"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])