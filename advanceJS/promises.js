console.log("********promiseOne********");
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve();
    },1000)
});

promiseOne.then(()=>{
    console.log("promise consumed");
});




// Other way of declaration
console.log("********promiseTwo********");
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Assync task 2 completed");
        resolve()
    },1000)
}).then(()=>{
    console.log("promise part 2 consumed");
})



// Other way of declarig the promise but with accessing the parameter
console.log("********promiseThree********");
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello from async part 3");
        resolve({userName:"vickyacharjee",passWord:"123456"});
    },1000)
})

promiseThree.then((userInfo)=>{
    console.log(userInfo); 
})

// Other way for observing both error and resole side

const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let error=false;
    if (!error){
        resolve({userName:"vicky",passWord:"123"})
    }
    else{
        reject("oopS Something went wrong");
    }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved or reject");
}) 

// now using async await we will do the exact as same operations

const PromiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let error=false;
    if (!error){
        resolve({userName:"vicky-fromAsyncAwait",passWord:"123"})
    }
    else{
        reject("oopS Something went wrong");
    }
    },1000)
})

async function consumePromiseFive(){
    // actually using async await... these approach ussually cant do error handling
    // So for this use try catch
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
      console.log(error);  
    }
}
consumePromiseFive();

// consuming from dataBase or as an example using async await
// async function getAllusers(){
//     try {
//     const response=await fetch('https://api.github.com/users/vickyacharjee');
//     const data=await response.json();
//     console.log(data);

//     } catch (error) {
//         console.log(error);        
//     }
// }
// getAllusers();

// same thing as above but doing with the promises and ** remember that fetch is considered as promise so we can apply all the instance of promise like .then.catch.finally

fetch('https://api.github.com/users/vickyacharjee')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))