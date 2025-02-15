
let a =10;
const b = 20;
var c = 30;

let _adi_tya = 10;
let $adi$ = 20;
let adi$_20 = 40   //digit, $ and _ are allowed and ; is not compulsory

console.log("i am here", _adi_tya);

const user = {
    name: "Aditya",
    age: 25,
    name: "Pragati",  // ❌ Duplicate key!
};
console.log(user.name); // "Pragati"

//let ^adi = 20; //error 

//primitive datatype - number, string (" ", ' ', ` `), boolean, undefined, null

//non primitive datatype - object, array, function

let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

let y = null;
console.log(y); // null
console.log(typeof y); // "object" (this is a known JavaScript bug!)

/*
this is
multiple line comment
*/

//operators
let y2 = 2**3; //exponents 2^3

//ogical operator -> && , ||, !
//bitwise opertor -> & , |, ^ (xor), ~(not)
// (5 & 7) -> 101  (5) 
//           &111  (7)
//           _________
//            101  (5) -> (answer)

//difference between == and ===
console.log("23"===23) // false -> no typeconversion take place
console.log("23"==23) // true -> after type conversion this check happens

console.log(0 === false);  // false (number !== boolean)
console.log(null === undefined);  // false (different types)
console.log(0 == false);  // true  (false is converted to number 0)
console.log(null == undefined);  // true (special case)