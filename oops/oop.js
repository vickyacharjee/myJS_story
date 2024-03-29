const user={
    userName:"vicky",
    logInCount:8,
    signedIn:true,
    gteUserDetails:function(){
        //console.log("hello from inside the functions");
        //console.log("username",this.userName);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.logInCount);
// console.log(user.gteUserDetails());
// console.log(this);


// constructor
function UserDetails(userName, isLoggedIn, logInCount) {
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.logInCount = logInCount;
    return this;
}


// in constuctor the new keyword is given to get the instance of this class or object literal
// if new keyword is npt included then the new istance will not be created and remeber that object is stored at heap, so the main variable will be changed again and again so in order to prevent this use new keyword
const userOne = new UserDetails('vicky', true, 2);
const userTwo = new UserDetails('hello', false, 3);

console.log(userOne);
console.log(userTwo);
