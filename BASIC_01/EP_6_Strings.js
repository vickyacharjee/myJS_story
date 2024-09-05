
//         // let a="vicky";
//         // console.log(a);

//         const game=new String("vic");
//         console.log(game);


//         // let vic="vicky";
//         // console.log(vic.length);
//         // console.log(vic.length);
    



//         //backiticks
//         let name="vicky";
//         let age="20";
//         console.log(`hii everyone this is ${name} and i am ${age} year old`);
//         console.log(`hii everyone this is ${name.toLocaleUpperCase()} and i am ${age} year old`);// just using simple upper case method

//         //string has key:value pair... so basically strings are formed in object not an array okays
//         const gameName= new String("GTAsanandreas");
//         console.log(gameName);//return the absic output as GTAsanandreas
//         console.log(gameName.charAt(1));// returns the character position as t which lies in the index 2
//         console.log(gameName[0]);
//         console.log(gameName[1]);
//         console.log(gameName[2]);
//         console.log(gameName[3]);
//         console.log(gameName[4]);
//         console.log(gameName[5]);
//         console.log(gameName[6]);
//         console.log(gameName[7]);
//         console.log(gameName[8]);
//         console.log(gameName[9]);
//         console.log(gameName[10]);
//         console.log(gameName[11]);
//         console.log(gameName[12]);
//         console.log(gameName[13]);// if the idexing exceeds then the output will be thrown as NULL

//         // console.log(a)

// //Here is all about te substring Method
//        const Gname=new String("vickyacharjee");
//        console.log(Gname);
//     //    const game=new String("vic");
//      console.log(Gname.substring(0,4));
//      console.log(Gname.substring(0,5));

//      console.log(Gname.substring(0,6));

//      //suppose i want get the value in such that it should be icky

//      const res=Gname.substring(1,5);
//      console.log(res);


//      //.slice Method
//      console.log(Gname.slice(0,2));

//      //.replace Method

//      let vic=Gname.replace('vic','icv');
//      console.log(vic);

//      let yo=new String("Hi yhere this is vicky acharjee n i am 20 yr old")
      
//      let yoyo=yo.replace('n','and');
//       console.log(yoyo);

//      //now we will se the .Trim method
     
//      let GG=new String("     vicky     ACharjee");
//      console.log(GG.trim());

//      let ic=new String("         Yo");
//      console.log(ic.trim());

// //problem STATEMNT 
//      const icc=new String("Yo this is vicky acahrjee");
//      let r=icc.replace('this','This');
//      console.log(r);
//      r=icc.replace('vicky','VICKY');
//      console.log(r);
//      r=icc.replace('acahrjee','ACHARJEE');

//      console.log(r);
// // The reason you're not getting the expected results when calling replace multiple times is that the replace method does not modify the original string in place. Instead, it returns a new string with the replacements applied. Therefore, when you call replace and assign the result to the variable r, subsequent calls to replace do not operate on the modified string; they still operate on the original unmodified string.

// /*
// const icc = new String("Yo this is vicky acahrjee");

// let r = icc.replace('this', 'This');
// console.log(r); // Output: "Yo This is vicky acahrjee"

// r = icc.replace('vicky', 'VICKY');
// console.log(r); // Output: "Yo this is VICKY acahrjee"

// r = icc.replace('acahrjee', 'ACHARJEE');
// console.log(r); // Output: "Yo this is vicky ACHARJEE"


// */

// //this is split method and this basically converts string to an array  
// //Example::::
// const split ="vicky acharjee and i am 20 yr old";

// let s=split.split(' ');
// console.log(s);


// //Example2

// const split2 ="vicky_acharjee_and_i_am_20_yr_old";

// let s2=split2.split('_');
// console.log(s2);

// let s3="vicky/acharjee/and/i/am"
// let s33=s3.split('/');
// console.log(s33);


// //and thats very ovious both will results like(vicky acharjee and i am 20 yr old)


// ** seconds serie going on
let simpleString="hello from string one"
let objectString=String("helllo from seonf string")

let string ="vickyacharjee"
let s=stringTwo=" vicky acharjee"

// prototype
// toUpperCase
console.log( string.toUpperCase()); //VICKYACHARJEE

// toLowerCase
console.log(string.toLowerCase()); //vickyacharjee
// charAt
console.log(string.charAt(2)); // c
// indexOf
console.log(string.indexOf('a')); // 5 ** one thing might be wondering in ur mind, if i have the same letter, occuring multiple time in a string... it simply returns the first letter as using precedence rulefrom lef to right
// lastIndexOf
console.log(string.lastIndexOf('a')); // 5 ** same as index of only but it uses precedence rule from left to right

// trim
console.log(stringTwo.trim()); // vickyacharjee

// trimLeft
console.log(stringTwo.trimLeft()); // vickyacharjee **trims only from the left

// trimRight
console.log(stringTwo.trimRight()); // vicky acharjee **trims only from the right

// split
console.log(stringTwo.split(' ')); // ['vicky', 'acharjee'] **splits it into an array as per ur desired, just via providing which to split here in our case we used split(" ")...that means it it spliting into an array via checking through array

//substring
console.log(string.substring(0,2)); 

//slice ** works very similar to substring, but the extra added feature is it can starts from reverse too... which basically starts from -1 and goes upto
let exampleSlice=string.slice(-3,-1) // we can observe it using reserve order
console.log(exampleSlice);

// replaceWith
console.log(stringTwo.replace('vicky', 'vickyacharjee'));  // vickyacharjee acharjee









 



























