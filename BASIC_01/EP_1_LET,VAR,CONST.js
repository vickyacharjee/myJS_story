const accountId=1234;
let accountEmail="vick@m.com";
var accountPassweord="vicky123";
accountCity="shillong";// this is the way to directly declare the variable
accountCity="Meghalaya"// so make sure that this is not const, it might fall under let OR var, since it cahnges its states
// console.log(accountCity);

// accountId=12;
// console.log(accountId); **throws an error - Assignment to a constatnt variable

// using console.table for displaying all the values together
console.table([accountEmail,accountId,accountPassweord,accountCity])
