
 let myDate = new Date();
// console.log(myDate.getDate());
 // console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());
 // console.log(myDate.toDateString());
 // console.log(myDate.setHours());


//FOR SECONDS... GETS EACH SECONDS
const getDate=new Date();
// console.log(getDate.getSeconds());

    console.log("2 prac");
// second practice:
let date=new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

//checking with arbitary date
let dateOne=new Date("01-14,2023")
console.log(dateOne);

let stampDate= Date.now()
console.log(stampDate);
console.log(dateOne.getTime());

//conveting into seconds
console.log(Math.floor(Date.now()/1000));

// customising the time and date
let dateTwo=new Date();
dateTwo.toLocaleString('default',{
        weekday: 'long',
})
console.log(dateTwo);
