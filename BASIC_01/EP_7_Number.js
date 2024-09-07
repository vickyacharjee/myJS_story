let score=12
let scoreTwo=1000000
console.log(score);
console.log(typeof score);

let scoreNo=Number(12)
console.log(scoreNo);
console.log(typeof scoreNo);

console.log( score.toString());// score datatype changes to string, that only for this particular line only it had been reflected.
//console.log( typeof score); // There if we will check its type then it asusual returns number
console.log(score.toString().length);

console.log(score.toFixed(2)); //12.00
console.log(score.toFixed(1)); //12.0

console.log(score.toPrecision(3)); //12.0

console.log(scoreTwo.toLocaleString());// by default JS gives USA counting format
console.log(scoreTwo.toLocaleString('en-IN'));// for making counting at indian format ... we need to include in the aparameter as "en_IN"

// Maths:
// Math is a predefined JS library
console.log(Math.abs(-1)); // provides absolute value from negative to posiutive only
console.log(Math.ceil(1.2)); // provides the smallest integer greater than or equal to the provided number
console.log(Math.floor(1.2)); // provides the largest integer less than or equal to the provided number
console.log(Math.max(1,2,3,4,5)); // provides the largest number
console.log(Math.min(1,2,3,4,5)); // provides the smallest number
console.log(Math.pow(2,3)); // provides the power of the number 
console.log(Math.sqrt(4)); // provides the square root of the number // ans as 2
console.log(Math.PI); // provides the value of PI i.e 3.14
console.log(Math.E); // provides the value of E i.e 2.718
console.log(Math.round(1.2)); // provides the nearest integer to the number
console.log(Math.trunc(1.2)); // provides the integer part of the number
console.log(Math.sign(1.2)); // provides the sign of the number
console.log(Math.sign(-1.2)); // provides the sign of the number
console.log(Math.sign(0)); // provides the sign of the number

console.log(Math.random()); // provides the random number between 0 and 1
// adding plus 1 so that the random number minimum value would be 1
console.log(Math.random()+1);
// making the range btw 1 to 10
console.log(Math.random()*10+1);
// now avoiding decimal via ceil or floor
console.log(Math.floor(Math.random()*10+1));

// Important formulae: hre we can privide min and max value manually
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));

const num=new Number(12)
console.log(typeof num);
num.a="vick"
console.log(num);





