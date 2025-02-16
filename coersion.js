
// coersion -> implicit type conversion of variable by js
//this is done by abstract operation but is not a part of ecmascript language.These functions are not available to users or coders directly.
// explicit type conversion is done manually by coder

console.log("string with num subtraction:", "1"-1)  // 0
console.log("num with string subtraction:", -4-"1")  // -5

// toNumber (abstraction operation)
// undefined -> NaN
// null -> 0
// boolean -> {true->1, false->0}
// symbol -> typeerror exception
// string -> when able to convert to number then it is converted or else NaN
// object -> toPrimitive is called with hint as number

// stepts for (-) operator
// 1. get value of left and right operand
// 2. call toNumber for both
// 3. return after operation

console.log(10-null) //10
console.log(10-undefined) //NaN
console.log(10-NaN) //NaN
console.log(10-true) //9
console.log(10-"dhed60") //NaN -> whenever string is not able to get converted to number then not valid so NaN
console.log(10-".4060") //9.594
console.log(10-"0xa") // 0 -> "hexadecimal" to number -> 0xa is 10
console.log("10"-"10") //0

// toPrimitive -> it gets utilised by toNumber and other such abstraction operation)
// takes 2 parameter input and preferred type
// 1. check if object is there or else just return directly
// 2. if preferred type is not given hint-> default or else if String, number -> hint-> String, number
// 3. after type check now if hint is default change it to number
// 4. call ordinaryToPrimitive

// ordinaryToPrimitive(value, hint(string/number))
// 1. if string call toString first and if type is object then call valueof and if this also returns object then give error
// 2. if object is not returned then call toNumber on returned value
// 3. if number, first call valueof and then toString

//valueOf -> by default this method is present in an object and returns the same object
//toString ->by default this method is present returns [object Object] whose type is string

let obj = {}
// console.log(obj.toString()) //[object Object] -> type of [object Object] -> string
// console.log(obj.valueOf()) // {} -> type of {} -> object

console.log(10-{}) //NaN

/*
STEPS
called toNumber of both left and right value
left is number so okay, right is object so toPrimitive is called
no hint so default to changed to number and ordinaryToPrimitive was called
number is in hint so first valueOf is called which returned {} which is object so next is called
toString returns [object Object] which is not object but string
but [object Object] is not number so it will give NaN
*/

obj = {a:6, valueOf(){
    return "10"; // overrided valueOf method so that no toString is called
}}
console.log(10-obj); //0

obj = {toString(){
    return {}; // first valueOf is called and it return object then toString also returns object so type error occurs
}}
//console.log(10-obj)

console.log("/"-10) //NaN

//addition operator
// 1st check if any of value is string then convert both to string and then concat
// else call tonumber and add

console.log("10"+2); //102
console.log(10+"ab"); //10ab
console.log(10+undefined) //NaN
console.log(10+NaN)//NaN
console.log(10+{}) //10[object Object]
console.log(10+{A:23}) //10[object Object]

console.log("/"+10) // /10

//unary operand
console.log(+"10") //10
console.log(-"1")   //-1
//console.log(*10) //error (unexpected token *)
//console.log(%10) //error

// toBoolean -> called in -> if(!x){xxxxx}
// falsy values => undefined , null , +0 , 0 , -0 , NaN , false , '' (empty string)
// other than these all true

// toString (another abstraction operation)
// 1. null,undefined,true,false => "null","undefined","true","false"
// 2. number => numberToString() => { +0 , -0 => "0"; [] => ""=>(empty string)}
// 3. symbol => TypeError
// 4. object => toPrimitive(hint:string)

console.log(""+[null,undefined]) // , => null undefined and [] are removed => array has a custom toString() method which makes it a comma separated string

console.log([]+0) //0
console.log([3,4]-2) //NaN
console.log([""]+0) //0
console.log(["0"]+0) //00
console.log([0]+0) //00






