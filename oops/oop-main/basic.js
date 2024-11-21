function user(username,age,isLoggedIn){
    this.username=username
    this.age=age
    this.isLoggedIn=isLoggedIn

    this.greeting=function() {
        console.log(`hello everyone ${this.username}`);
    }

    // return this;
}

// const userOne=user('vicky',21,false)
// const userTwo=user('akash',22,true)
// console.log(userOne);

const userOne=new user('vicky',21,false)
const userTwo=new user('akash',22,true)
console.log(userOne);
console.log(userTwo.greeting());
