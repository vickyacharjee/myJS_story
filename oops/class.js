
// // creating a class 

// class user{
//     constructor(userName, mail, password){
//         this.userName=userName;
//         this.mail=mail;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password} abc`
//     }
//     capitalLetter(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const detail= new user('vicky','vic@m.com',123456);
// console.log(detail.encryptPassword());
// console.log(detail.capitalLetter());


//same thing as above but with function n Pototype

function user(userName, mail, password){
        this.userName=userName;
        this.mail=mail;
        this.password=password;
}
user.prototype.capitalIze=function () {
     return `${this.userName.toUpperCase()}`
}
user.prototype.encrypt=function () {
     return `${this.password} abc`
}

const userDetail=new user('vicky','v@m.com',123);
console.log(userDetail.capitalIze())
console.log(userDetail.encrypt())
