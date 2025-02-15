
// array => contigeous(continuous) memory location on lower level language like c , c++
// but in js array is not necessarily continous
// This makes JavaScript arrays more flexible but less memory-efficient than low-level arrays.
// JavaScript Arrays Are Dynamic.If a contiguous memory block were allocated, adding/removing elements would be inefficient.
// multi datatype array is also possible


// string are immutable(cannot be changed) but array is multable (arr[2]=3);

let arr = [0,null, undefined,3,"adi"];
console.log("initial array : ", arr);

arr[3] = 4;
console.log("after mutating : ",arr);

let str = "aditya kakkar";
console.log("initial str", str)
str[4] = "y"; // there is no error but sting doesn't update
console.log("changed str", str)