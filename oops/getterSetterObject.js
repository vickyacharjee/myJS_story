const  user={
    _email:"vicky",
    _age:21,

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

const name=Object.create(user);
console.log(name.email);