const fetchData=async()=>{
const data= await fetch("https://api.github.com/users/vickyacharjee")
const json= await data.json();
console.log(json)
return json;
}
const data=fetchData()
console.log(data);

