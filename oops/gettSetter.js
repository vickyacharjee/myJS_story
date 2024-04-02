class user{
    constructor(username,age){
        this.username=username;
        this.age=age;
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        this._username=value;
    }

    get age(){
        let RandomAge=this._age;
        let random=Math.floor(Math.random()*10+1);
        RandomAge=random+1;
        return RandomAge;
    }
    set age(value){
        this._age=value;
    }
}
const userOne=new user('vicky',21);
console.log(userOne.username);
console.log(userOne.age);

// Note: currently getter and setter is being use via class and constructor call as commonly
// getter and setter can also be done via object and function but, generally using via class is much preferable