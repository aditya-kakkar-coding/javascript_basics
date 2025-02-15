
let str = "aditya kakkar"

let obj = {}
let uniqueCharacter = []

for (let value of str){
   if (!uniqueCharacter.includes(value)){
      uniqueCharacter.push(value);
      obj[`${value}`] = 1;
   }
   else{
      obj[`${value}`] = obj[`${value}`]+1
   }
}

console.log("result obj: ",obj)