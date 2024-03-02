
    
    let arr=[1,2,2,,3,3,3,3,3,3,3,3,3,3]
    console.log(arr);
    console.log(arr[13]);
    console.log(typeof arr);//returns  an object
    // so the type of array is **OBJECT**
    // in JS the array can be of mixed adat types as well as it can be resized for future use
    //in JS the array can be declared in two ways :: 
    // direct array => let const =[1,2];
    //by an object  => let arr= new Array(1,2);


    //now lets see all the basic methods of an array 

    let arr1=['vicky','acharjee','21'];
    console.log(arr1);
    console.log(arr1[0]);
    console.log(arr1[1]);
    console.log(arr1[2]);

   //push() method
   arr1.push('shillong');
   console.log("for push",arr1);
   arr1.push('Meghalaya');
   console.log("for push",arr1);

   //pop()
   arr1.pop();
   console.log("for pop",arr1);//last element will be removed

   //unshift()
   arr1.unshift('INDIA');
   console.log("for unshift",arr1);//adds an eleet at the first position of an index

   //shift()
   arr1.shift();
   console.log("for shift",arr1);//itbasically removed the first element from an array element

  //slice()
  console.log("for slice",arr1.slice(1,2));//acharjee

  //splice()
  //   console.log(arr1.splice(1,2));//"acharjee"  "21"
  console.log("for splice",arr1);//The splice is tricky to understnd since its actaually made a change in the original array elements only

  //include()
 console.log(arr1.includes('2'));//false (since ikts doesnt contains the elent in the given array)
 console.log("for include",arr1.includes('21'));//True


 //indexof()
 console.log(arr1.indexOf('vicky'));// since its contains on the zero elemnt in an array
 console.log("for indxof",arr1.indexOf('22'));// Returns -1 if it dosent contains the element on a given array


//++++++++++++++++++++object+++++++++++++++++
//Remember bydefault in js if we will check typeof any initialized array then it returns an object.. and individually checking then returns based on given condition like num, str, obj, etc
console.log("test for array");

const arrr=[1,2,3,4,5];
console.log(typeof(arrr));

const arrr2=["vicky",2,3,4,5];
console.log(typeof(arrr2[0]));

const arr3=[{name:"vicky"},{age:21}]
console.log(typeof(arr3[0]));

console.log(Boolean(1>0));







