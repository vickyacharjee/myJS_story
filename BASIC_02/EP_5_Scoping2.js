
//Exmaple of scoping with Function::

        // function one() {
        //     const userName="vicky"

        //      function two() {
        //         const website="YouTube"
        //         console.log(userName);
                
        //      }

        //     // console.log(website);// This returns "website is not defined"
        //     //Always remember that child can inherit the parent but parent cant inherit the child
        //     two()
            
        // }
        // one()

        //Global
        if(true){
            const name="vicky"
            console.log("First IF");
            if (true) {
                console.log("Second IF");
                if (name==='vicky') {
                    const website='vickyWEB';
                    console.log(name);
                }
            }
            // console.log(website);//Throw an error saying website not defined
        }


//Exmaple of scoping with Function::

// if (true) {
//     const name="vicky"
//     if (name==="vicky") {
//         const website=" OpenCommunity"
//         console.log(name+website);
        
//     }
//     console.log();
//     console.log(name+website);// here we can see that "website is not defined" since it went outof scope
// }




//Example of basics of Hoisting via scoping

//With normal functions
//with normal functions we can excute the functions independently anywhere unline the anaonymous one
// console.log(addOne(10));
// function addOne(value) {
//     return value+1;
    
// }


// With anonmyous function
// console.log(addTwo(2));//here the problem arises i.e in anaonmyous function once after the declaration of function only we can execute in the next line itself
// const addTwo=function(value) {
//     return value+1;
// }

// ----------------SecondPart------------------
console.log("second-part");

let a=10;
const b=20;
var c=30;

if (true) {
    let a=100;
    const b=200;
    var c=300;
 }
//  console.log(a);//10
//  console.log(b);//20
//  console.log(c);//300
 
// s1.

function one() {
    let userName="vicky";
    function two() {
        let website="youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

//s2.
    function userName(name) {
        if (name==="vicky") {
            console.log("hey vicky");
            let outterName="aka";
        }
        // console.log(outterName);
    }
    userName("vicky")






























        
