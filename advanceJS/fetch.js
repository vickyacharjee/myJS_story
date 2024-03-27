//added for fetch pending

fetch('https://api.github.com/users/vickyacharjee')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
   console.log(e);
})


