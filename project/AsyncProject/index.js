
//generating an random hexcode:
const randomColor=()=>{
    const hex='0123456789ABCDEF';
    let color="#";
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor())

const start=document.querySelector('.start').addEventListener('click',startChangingColor)
const stop=document.querySelector('.stop').addEventListener('click',stopChangingColor) 
document.querySelector('.refresh').addEventListener('click',refresh) 

let stopInterval;
function startChangingColor() {
 stopInterval=setInterval(()=>{
        document.body.style.backgroundColor=randomColor()
        document.querySelector('.start').style.backgroundColor="red"
    },10)
}

function stopChangingColor() {
    clearInterval(stopInterval);
    document.querySelector('.stop').style.backgroundColor="red"
    stopInterval=null
}
function refresh() {
    document.querySelector('.start').style.backgroundColor="white"
    document.querySelector('.stop').style.backgroundColor="white"
    document.body.style.backgroundColor="white"
}