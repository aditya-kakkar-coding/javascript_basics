
// array => contigeous(continuous) memory location on lower level language like c , c++
// but in js array is not necessarily continous
// This makes JavaScript arrays more flexible but less memory-efficient than low-level arrays.
// JavaScript Arrays Are Dynamic.If a contiguous memory block were allocated, adding/removing elements would be inefficient.
// multi datatype array is also possible


// string are immutable(cannot be changed) but array and object is multable (arr[2]=3);

let arr = [0,null, undefined,3,"adi"];
console.log("initial array : ", arr);

arr[3] = 4;
console.log("after mutating : ",arr);

let str = "aditya kakkar";
console.log("initial str: ", str)
str[4] = "y"; // there is no error but sting doesn't update
console.log("changed str: ", str)


let obj = {name:"adi", age:5};
console.log("obj initial name: ",obj["name"]) // when [] is used key should be given as string
console.log("obj initial name: ",obj.name)
obj.name = "kakkar"  // updating object
console.log("obj changed name: ", obj.name)

console.log("obj initial: ",obj)
obj.place = "patna" // add key value pair in object
console.log("obj finally: ",obj)

delete obj.place
console.log("obj after delete: ",obj)

// Object.keys(obj) -> to get array of keys of object
// Object.values(obj) -> to get array of values of object

const objArrayEntires = Object.entries(obj); // return a 2d array with key at 0th index and value at 1st index
console.log("obj to 2d array: ", objArrayEntires)