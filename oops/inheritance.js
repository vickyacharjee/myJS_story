class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log("hi "+this.username);
    }
}

class user2 extends user{
    constructor(username,mailId,password){
        super(username)
        this.mailId=mailId
        this.password=password
    }
    extendLogMe(){
        console.log("hi from user2"+this.username);
    }
}

const userOne= new user("vicky")
console.log(userOne.logMe());

const userTwo= new user2("vicky2","v@m.com",123)
console.log(userTwo.extendLogMe());

// console.log(userOne.extendLogMe());