function outter(){
    let name="hello"
    function inner(){
        console.log("inner Most function executed successfully :)");
    }
    return inner; // remember return statement not only return the function call but the whole scoping of refrenced return
 }
const closure=outter();
closure()