x = -0;
console.log(x==0) //true
console.log(x===0) //true

console.log(Object.is(x,0)) //false
console.log(Object.is(+0,0))
console.log(Object.is(0,0))

console.log(Math.sign(-3))//-1
console.log(Math.sign(x)) //-0

function customCheckSign(num){
    if(num==0){
        if(Object.is(num,0)){
            return 1
        }
        else{
            return -1
        }
    }
    else{
        return Math.sign(num)
    }
}

console.log(customCheckSign(x))
console.log(customCheckSign(0))
console.log(customCheckSign(+0))
console.log(customCheckSign(-3))
console.log(customCheckSign(+3))
