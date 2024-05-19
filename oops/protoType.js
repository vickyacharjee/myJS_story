// check with Array
const myArray=['hey','this','is','vicky']

Array.prototype.vicky=function (){
    console.log("hello array from vicky");
}
console.log(myArray.vicky());

//check with object
const myObject={
    name:'vicky',
    age:21
}
Object.prototype.vickyObject=function (){
    console.log("hello object from vicky");
}
console.log(myObject.vickyObject());

// so far we had setUp the prototype for array and object, but one catch is there i.e we all know that object the the gateway to all other dataTypes so in the above code we already did object protoyping
// now object prototyped i.e vickyObject() can be used anywhere lets see then:)

// testing vickyObject() prototype with string and function as example
const myName='hi this is vicky';
String.prototype.vickyString=function (){
    console.log("hi string from vicky");
}
console.log(myName.vickyString());

// testing vickyObject() prototype with  function without declaring
const myFunc=function (){
    console.log("hi function from vicky");
}
myFunc.vickyObject();// it works!!!




// Question: make a protoType that  accepts string and provide the length of fthe string excluding the spaces
// const name="vicky  "
// console.log(name.length);



const name="vicky  "
String.prototype.trueLength=function (){
    console.log(this); // retiurns the outPut as [String: 'vicky  ']
    console.log(this.trim().length) //returns the output as 5 withOut including the spaces
}

name.trueLength()

const exampleName=" hithisisvickyacharjee   "// why the trim was not working because the trim excludes all the spaces before or after the letter or word is completed
 console.log(typeof(exampleName));
exampleName.trueLength();

