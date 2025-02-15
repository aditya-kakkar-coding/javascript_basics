
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
// object -> toPrimitive is called

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
