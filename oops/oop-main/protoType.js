function User(userName, age) {
    this.userName = userName;
    this.age = age;     
    return this;
}

User .prototype.increment = function () {
    this.age++;    
    return this.age; // Return the updated age
}

User .prototype.printMe = function () {
    return `Hello ${this.userName}`; // Return the greeting message
}

const userOne = new User('vicky', 21);
console.log(userOne.increment()); // Logs the incremented age
console.log(userOne.printMe());   // Logs the greeting message