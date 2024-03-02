
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






















