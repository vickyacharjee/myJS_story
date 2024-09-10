
        // let user={};
        let user=new Object();
        
        user.id=123;
        user.name="vicky";
        user.isLoggedIn="false";
        user.isLoggedInn=false;

        // console.log(typeof user.isLoggedInn);
        // console.log(typeof user.isLoggedIn);
        // console.log(typeof user.name);
        // console.log(typeof user.id);

        let arr=[1,'vicky',false]
        let arr2=[1,'vicky',false,123,"acharjee"];
        // console.log(arr2);
        // console.log(typeof arr);
        // console.log(typeof arr2);
        // console.log(typeof arr2[0]);
        // console.log(typeof arr2[1]);
        // console.log(typeof arr2[2]);
        // console.log(typeof arr2[3]);
        // console.log(typeof arr2[4]);



        //Normal method
        let a={
            name:"vicky_acharjee",
            class: 'btch'
        }
        // console.log(a.name);


        //via destructure
        let {name:vic}=a;
        // console.log(name);//if we suppose uncomment and run then it will throw an error since its name priority is given as "vic"

        // console.log(vic);
        // console.log(user);

        //-----------second part-----------

        // Objects 
        //SingleTon
        //Object Literals

        // way to create Objects
        //1. Object Literal
        let obj1={
            name:"vicky",
            class:"btch"
            }
            // ** NOTE: all the key in objects are acceprted as string, if in genral we declare it normal variable then also internally it converts and accept as String
            // There are two ways to access objects
            //1. Dot Notation
            // console.log(obj1.name);// vicky
            //2. Bracket Notation
            // console.log(obj1['name']);// vicky
            //  ** NOTE: . notation is kinda new approach where as, using square brackets used as main scenario approach
            //  ** NOTE: we can use bracket notation with variables also
            //  ** NOTE: if we need  valid reason of maiking squate braces much added advantages from . notation is:

            // creation of symbol variable
            let symbol=Symbol("keyOne")
            // creating new object for symbol example
            const mySym={
               "vic Name":"vicky",
                age:21,
                [symbol]:"thisIsKey"
            }
            // log using . notation
            // console.log(mySym.symbol)// thisIsKey
            // So using dot notation we got the result but partially since ithis is not the correct approach 

            // log using bracket notation
            // console.log(mySym[symbol])// thisIsKey ** correct approach

            //another very very imporatnt this is, if bychnace the key in object is within string manually " " then there is no chace for accessing using dont notation, there we need to use [] braces
            // Example taking the same object from above
            
            // with dot notation
            // console.log(mySym.vic name);// throws an error since there should be no space in variable naming
            // with bracket notation
            // console.log(mySym["vic name"]);// vicky.... since using [] we can access by embedding it into a string

            // Freezing an object
            // const obj2={
            // name:"vicky",
            // age:21
            // }
            // obj2.name="vicky-acharjee"
            // console.log(obj2.name); // vicky-acharjee
            // // now we will freeze
            // Object.freeze(obj2)
            // obj2.name="vicky-acharjee-2"// no changes had been made here since the obj2 has already been freezed
            // console.log(obj2.name); //// vicky-acharjee


//              const funobj={
//                 name:"vicky",
//                 greet:function(){
//                     console.log("hey there everyone");
//                 },
//                 greet2:()=>{
//                     console.log("hey from arrow functions");
//                 },
//                 greet3(){
//                     console.log("hey from "+this.name)
//              }
//             }
//              console.log(funobj.greet);
//              funobj.greet2();
//              funobj.greet3();

//              let n1=100
//              let n2=new Number(100)
//              console.log(typeof n2);
//              console.log(n1==n2);
//              console.log(n1===n2);
//              const numbers = [33, 2, 8]; 
// numbers.sort();
// console.log(numbers);
// console.log(numbers[1])
// const isTrue = true == [];
// const isFalse = true == ![];

// console.log(isTrue + isFalse);
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// let person = { name: 'Lydia' };
// const members = [person];
// console.log(members);
// person = null;

// console.log('I want pizza'[4]); // returns n
// console.log(members);


// ---------------Objects second part------------------
let state="Meghalaya"
const obj_one={}
obj_one.name="vicky",
obj_one.age=21,
obj_one["city"]="shillong"
obj_one.sstate=state

console.log(obj_one);

//nested objects:
const person={
    userInfo:{
        userFullName:{
            firstName:"vicky",
            lastName:"Acharjee"
        },
        userAge:21,
        UserCity:"shillong",
        userQualification:{
            degree:"Btech",
            branch:"CSE",
            college:"NIT",
            state:"trichy",
        }
    },
    isLoggedIn:true,
    contriesVisited:["india","usa","japan","norway"],
    cards:[
        {cardNumber:"1234567890123456",cardType:"visa"},
        {cardNumber:"9876543210987654",cardType:"mastercard"},
    ]
}
console.log(person.userInfo.userFullName.firstName); // printing first name of user
console.log(person.userInfo.userAge); // printing age of user, 21
console.log(person.contriesVisited[3]);
console.log(person.cards[0].cardType);
console.log(person.cards[1].cardType);

// Merging two or more object at one objects
const object1={
    name:"vicky",
    city:"blr"
}
const object2={
    name2:"Nivii",
    city2:"Qatar"
}
// 1 WAY:
// using confuse approach ** note:: never use just for the clarification purpose
// const res={object1,object2}
// console.log(res);
 // it returns like this:: {
//   object1: { name: 'vicky', city: 'blr' },
//   object2: { name: 'Nivii', city: 'Qatar' }
// }

// 2 WAY: 
//using assign method from object library
const resultOne=Object.assign(object1,object2)
console.log(resultOne);

// 3 WAY:
//using spread operator
const resultTwo={...object1, ...object2}
// console.log(resultTwo); //{ name: 'vicky', city: 'blr', name2: 'Nivii', city2: 'Qatar' }


    // NOTE: very very important, whenever merging two objects always have the property unique between two or more objects, else the chanes of collision may happen

// Objects keys, value, entries    
console.log(Object.keys(object1));
console.log(Object.values(object1));
console.log(Object.entries(object1));
// Object.entries makes Array of Array 
// [
//   [ 'name', 'vicky' ],
//   [ 'city', 'blr' ],
//   [ 'name2', 'Nivii' ],
//   [ 'city2', 'Qatar' ]
// ]

//hasOwnProperty
console.log(object1.hasOwnProperty('name')); //true

// Object de-structure
const object={
    name:"vicky",
    age:21,
    cityOfOrigin:"shillong"
}
// console.log(object.cityOfOrigin);
const {cityOfOrigin}=object
const {cityOfOrigin:city}=object
console.log(cityOfOrigin);
console.log(city);

