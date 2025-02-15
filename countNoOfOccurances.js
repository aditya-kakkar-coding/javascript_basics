
let str = "aditya kakkar"

let obj = {}

// medthod 1 -> using array and object
// let uniqueCharacter = []

// for (let value of str){
//    if (!uniqueCharacter.includes(value)){
//       uniqueCharacter.push(value);
//       obj[`${value}`] = 1;
//    }
//    else{
//       obj[`${value}`] = obj[`${value}`]+1
//    }
// }

// method 2 -> using only object
// for ( let value of str ){
//    if (obj[`${value}`]){ //`${value} is value in string` -> this is interpolated string
//       obj[`${value}`] = obj[`${value}`]+1;
//    }
//    else{
//       obj[`${value}`] = 1;
//    }
// }

// method 3 -> object values can be accessed directly and for getting value method obj[xxx] is recommended and 
// not obj.xxx (it will find xxx in obj and not xxx value on obj)

for ( let value of str ){
   if (obj[value]){
      obj[value] = obj[value]+1;
   }
   else{
      obj[value] = 1;
   }
}


console.log("result obj: ",obj)