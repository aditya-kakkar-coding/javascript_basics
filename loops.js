

let arr = [2,3,4,5,6];
arr = "aditya kakkar"

for( let i = 0 ; i < arr.length ; i++ ){
    console.log("From for loop: ",arr[i]);
}

//in for of loop no length is required or to maintain index
for ( let value of arr){    
    console.log("From for of loop :", value)
}