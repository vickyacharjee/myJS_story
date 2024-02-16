//Traditional Fucntion

function name(x,y) {
    return 2+3;
}

console.log(name(1,2));

//Arrow Function

const arrow=(x,y)=>x+y;
console.log(arrow(1,2));//implicit

const arrowE=(x,y)=>{
    const res=x+y
    return res;
}
console.log(typeof(arrowE(1,2)));
console.log(arrowE(1,2));//Explicit

const loop=(n,len)=>{
    for (let index = n; index < len; index++) {
       return n+"X"+index+"="+n*index;
    }
}

const ress=loop(2,10)
console.log(ress);

