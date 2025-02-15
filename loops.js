

let arr = [2,3,4,5,6];
arr = "aditya kakkar"

for( let i = 0 ; i < arr.length ; i++ ){
    console.log("From for loop: ",arr[i]);
}

//in for of loop no length is required or to maintain index
for ( let value of arr){    
    console.log("From for of loop :", value)
}

let obj = { name:"adi",age: 5,place: "patna"}

for (let keys in arr){
    console.log("for in loop: ",keys)
}

// for in loop is also used to get keys or iterate over object ( it can also be used by array but it returns index of array and not its values )
for (let keys in obj){
    console.log("for in loop on object: ",keys)
}