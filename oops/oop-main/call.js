function SetUserName(username) {
    this.username=username;
}

function CreateUserName(username,email,password) {
    SetUserName.call(this,username);
    this.email=email
    this.password=password;
}

const newUser=new CreateUserName('vicky','vic@m.com','123456');
console.log(newUser);
