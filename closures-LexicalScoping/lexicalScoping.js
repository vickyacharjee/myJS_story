
//          ====== Level One [scope check]======
// ***uncomment to run the code from line number 4 to 13***
// function outter(){
//     console.log("outter function executed");
//     let username="vicky"
//         function inner(){
//             console.log("inner function executed");
//             console.log(username);
//         }
//     inner();    
// }
// outter();

//          ====== Level Two [scope check with 2 inner Functions]======
//  ***uncomment to run the code from line number 17 to 30***
// function outter(){
//     let name ="vicky"
//     // our first inner function
//     function innerOne() {
//         console.log("From inner one: ",name);
//     }
//     // our second inner function 
//     function innerTwo() {
//         console.log("From inner two: ",name);
//     }
//     innerOne();
//     innerTwo();
// }
// outter();
// output
// From inner one:  vicky
// From inner two:  vicky

//          ====== Level Two [scope check with 2 inner Functions]======
//  ***uncomment to run the code from line number 37 to 50***
// function outter() {
//     let name="vicky";
//     function innerShareOne(){
//         let mySeceretNo=123;
//         console.log("innerShareOne ",mySeceretNo);
//     }
//     function innerShareTwo(){
//         // here we can observe that in same level of child or parent scoping can't accessed the values of each other  
//         console.log("innerShareTwo ",mySeceretNo);
//     } 
//     innerShareOne()
//     innerShareTwo()
//  }
//  outter()




