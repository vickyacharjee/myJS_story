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
   static extendLogMe(){
        console.log("hi from user2"+this.userName);
    }
}
// so including static we are not accessed by other  methods call
const detail=new user2('vic','vic@pass.com',123)
detail.extendLogMe()


