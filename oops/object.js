 //protoType 

 //creation of protoType

 function getDetail(name,age){
    this.name=name;
    this.age=age;
 }

 getDetail.prototype.increment=function (){
    this.age++;
 }

 const userOneDetail=new getDetail('vicky',21);
//  console.log(userOneDetail.increment());
userOneDetail.increment()
console.log(userOneDetail);