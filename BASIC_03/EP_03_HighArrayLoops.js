
//forOf loop
//forOf is implied to an object=> array or anything like string etc
// string, Array, Map (use this as refrence)

 
               //syntax

                // for (const iterator of object) {
                    
                // }

//forOf with array

// console.log("for of loop");
//     const arr=[1,2,3,4,5,6];
//     for (const item of arr) {
//         console.log(item);
//     }






//forOf with basic number
//here, we can observe that forOf is not valid with number
    // const num=1234567890;
    // for (const item of num) {
    //     console.log(num);
    // }



// forOf with string    
    const str="Hi, there this is vicky";
    for (const item of str) {
        console.log(item);
    }



//forOf with object
// with object it doesnt work
    // const obj={
    //     name:"vicky",
    //     age:21
    // }

    // for (const item of obj) {
    //     console.log(item);
        
    // }


//Example of forOf loop with string as using continue    

//    const str="Hi, there this is vicky";
//     for (const item of str) {
//         if (item==" ") {
//             continue;
//         }
//         console.log(item);
//     }



//********************** MAP *************************

// initializing a Map
const map=new Map();

map.set('IN','india')
map.set('USA','United states of America')
map.set('fr','France')
// console.log(map);
//Map(3) {'IN' => 'india', 'USA' => 'United states of America', 'fr' => 'France'}

for (const [key,value] of map) {
    console.log(key);//IN USA fr
    console.log(value);//india, united states of america, France
}

for (const [key,value] of map) {
    // console.log(`${key} is ${value}`);
}

// [Tips: so far we have seen that forOf is applied to only string, array, map]
//



console.log("**********For in loop**********");
//forIn loop
// object, array
// if you want to get the value of it then  use object[key]... so in returns it gets the value
//with object

const obj={
    name:"vicky",
    age:21,
    address:"Shillong"
}

for (const key in obj) {
    console.log(key);
}//return the key only i.e name,age,address



for (const key in obj) {
    console.log(`${key} is ${obj[key]}`);
}//return the key only i.e name,age,address





//with Array
const array=['vicky','21','address'];
for (const key in array) {
    console.log(key);//in returns 0,1,2
}
//now if we want to get the value of the index ranther than index position 
for (const key in array) {
    console.log(array[key]);//in returns 0,1,2
}

//merging of both

for (const key in array) {
    console.log(`${key} value is ${array[key]}`);//in returns key+value
}

for (let i = 0; i < array.length; i++) {
     console.log(`   ${i} value is      ${array[i]}`);
}

console.log("********** for each ******************");
//forEach
//it mandatory needs an parameter
//with array, object, array+object //this is mainly we use in database operations
const array2=['vicky','21','Meghalaya'];

array2.forEach(function(i){
    console.log(i);
})//  this is callback funcion which is specifivcally i mplemented in forEach loop



array2.forEach((i)=>{
    console.log(i);
})//same thing but done in arrow function



array2.forEach(function(item,index,arr){
    console.log(item,index,arr);
    //vicky 0 (3) ['vicky', '21', 'Meghalaya']
    //here items reprents value
    //here index reprents index position
    //here arr represents full array
})//  this is callback funcion which is specifivcally i mplemented in forEach loop




    // callback functions has in total (item, index,arr)=>{}
    //here items reprents value
    //here index reprents index position
    //here arr represents full array

const FilePath=[
    {
        lagName:"javaScript",
        lagFile:"js"
    },
    {
        lagName:"python",
        lagFile:"py"
        
    },
     {
        lagName:"java",
        lagFile:"java"
       
    },
    {
        lagName:"swift",
        lagFile:"swift by apple"
        
    },
    {
        lagName:"c++",
        lagFile:"cpp"
        
    }
]

FilePath.forEach((item)=>{
    console.log(item);//represents the array only
})

// so in order to represents the whole array and object too
FilePath.forEach((item)=>{
    console.log(item.lagName);//only lagName wwill be thrown as output
})



FilePath.forEach((item)=>{
    console.log(item.lagFile);//only lagFile will be thrown as output
})



FilePath.forEach((item)=>{
    console.log(`${item.lagName} is of ${item.lagFile}`);//for both
})






console.log("--------------SecondPart----------------");

// forof
//NOTE: forOf only works with: array, strings, maps,sets, argument-objects,typed array
 //forOf with array
    let arr=[1,2,3,4,5];
    for (const num of arr) {
        // console.log(num); //1,2,3,4,5
    }
    // forOf with Strings
    let greetings="hello vicky"
    for (const greet of greetings) {
        // console.log(greet); //hello vicky
    } 
    // OR just a form of practice skipping the space via continue statement.
    let greetingsTwo="hello vicky"
    for (const greet of greetingsTwo) {
        if (greet==" ") {
            continue;
            // console.log("avoided the space");
        }
        // console.log(greet); // hellovicky -> spaces avoided
    }
 // map
    //creating a map object:
    const myMap=new Map();
    myMap.set("name","vicky");
    myMap.set("age","21")
    console.log(myMap); // Map(2) { 'name' => 'vicky', 'age' => '21' }

    // now looping the myMap object:
    // here we will encounter an issue i.e, whole key and value is been printed.
    for (const key of myMap) {
        console.log(key); //[ 'name', 'vicky' ]  [ 'age', '21' ]
    }
    //to print only the keys then:
    // for key
    for (const [key,value] of myMap) { // now the map object has been de-structured
        console.log(key); //name and age
    }
    //to print only the values of the key then:
    // for value
    for (const [key,value] of myMap) { // now the map object has been de-structured
        console.log(value); //vicky and 21
    }

// forIn loop:
 //NOTE: forIn only works with: objects, arrays, maps,sets, argument-objects

 // Objects:
    const myObj={
        YourName:"legend",
        YourAge:22,
    }
    // for key
    for (const key in myObj) {
        console.log(key); // this simply returns the key i.e YourName and YourAge
        }
    // for value    
    // NOTE: here, if we want to print the value of myObj then:        
    for (const key in myObj) {
        console.log(myObj[key]); //legend and 22
    }    
 // array:
 let arrTwo=['js','java']
 // for key in forIn:
 for (const key in arrTwo) {
    console.log(key); // Note: in forOf loop simply u will get the key of array, but here it retuens in the index number not the value.
 }

 // for value in forIn:
 for (const key in arrTwo) {
    console.log(arrTwo[key]); // Note: we got the value of it. 
 }

 //map:
 //creating a map object:
    const myMapTwo=new Map();

    myMapTwo.set(
        "class","12",
        "sec","A"
    )
    console.log(myMapTwo); // { 'class' => '12' }

 // using forIn:
    for (const key in myMapTwo) {
       console.log(key); // returns blank.. sinc maps are not iretable
    }

// forEach:
const thisArray=[1,2,3,4]
thisArray.forEach((i)=>{
    console.log(i);
})    
// full fledged
thisArray.forEach((i,index,arr)=>{
    console.log(`The value for ${index} is ${i} and the array is ${arr}`);
})

// doing the operation with forEach as array of object
// Very common operation:

const programming=[
    {
        langName:"java",
        fileName:"java"
    },
    {
        langName:"javaScript",
        fileName:"js"
    },
    {
        langName:"C++",
        fileName:"cpp"
    },
    {
        langName:"php",
        fileName:"php"
    }
]

programming.forEach((item)=>{
    console.log(`The file name is ${item.langName} and its extension is ${item.fileName}`);
})




    



















