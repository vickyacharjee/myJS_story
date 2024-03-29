function setUserName(userName){
    this.userName=userName
    console.log('called');
}

function createUser(userName, email, password){
    setUserName.call(this,userName) //here we use this to call this [GLOBAL EXECUTION CONTEXT KNOWLEDGE IS PRIOR]
    this.email=email
    this.password=password
}

const userOne= new createUser('vicky','vic@matchMedia.com',123)

console.log(userOne); // returns as createUser { email: 'vic@matchMedia.com', password: 123 } ... here we can see that userName have not came 