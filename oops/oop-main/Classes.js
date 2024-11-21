class user{
    constructor(username,mail,password){
        this.username=username
        this.mail=mail
        this.password=password
    }

    encryptPassword(){
        return this.password+'abc'
    }
    toCapitalize(){
        return this.username.toUpperCase()
    }
}
const useOne=new user('vicky','vic@m.com','123')
console.log(useOne.encryptPassword());
console.log(useOne.toCapitalize());


// Re-Presenting same thing via functions:

function userFunc(username,mail,password){
        this.username=username
        this.mail=mail
        this.password=password
}
userFunc.prototype.encryptPassword=function(){
    return this.password+'abc'
}
userFunc.prototype.toCapitalize=function(){
    return this.password.toUpperCase()
}
const userTwo=new userFunc('vicky','vic@m.com','123')
// console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.toCapitalize())

