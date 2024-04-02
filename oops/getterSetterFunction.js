function user(username,age){
    this._username=username
    this._age=age

    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toUpperCase();
        },
        set:function(value){
            this._username=value;
        }
    })
}

const userOne=new user('vicky',21)
console.log(userOne);
console.log(userOne.username);
