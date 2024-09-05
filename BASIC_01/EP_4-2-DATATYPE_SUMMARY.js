// let number=Symbol(123);
// console.log( typeof number); // Symbol(123)

function name() {
    console.log("yo world");
}
console.log(typeof name()); //The reason console.log(typeof name()); shows undefined instead of a type is because the name function doesn't explicitly return a value. In JavaScript, if a function doesn't return a value, it defaults to returning undefined
console.log(typeof name); //this is the corect approach 

function name2() {
   return 1
}
console.log(typeof name2()); // here we can observe that it return one since we have statically reaturn type as number