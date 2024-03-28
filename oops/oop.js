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

const userOne =  UserDetails('vicky', true, 2);

const userTwo =  UserDetails('hello', false, 3);
console.log(userOne);
console.log(userTwo);
