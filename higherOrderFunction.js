

let arr = [1,2,3,4,5,6];
console.log(typeof(arr))  // array is internally implimented as an object
//though they inherit functions differently like Array.prototype and Object.prototype
arr = {0:1,1:2,2:3,3:4,4:5} 
arr = Object.values(arr) //changes object to array

//higher order function is where we pass a function as argument.
//in following case map is higher order function in which square function is passed

//normal map usecase

function square(x){
    return x*x;
}

const resultSquare = arr.map(square);

console.log("Square result : ", resultSquare);

// when 2 variables is passed as parameter in fucntion that is an argument to map fucntion
// in this case 1st parameter will be actual variable and 2nd parameter will be the index

function multiParam(x, index){
  return [x,index]
}

const resultMultiParam = arr.map(multiParam);

console.log("Multi parameter result : ",resultMultiParam)

// filter (another higher order function)
// filter result should be a boolean, true values will go into the result

function evenOrOdd(x){
    if (x%2==0){
        return true;
    }
    else{
        return false
    }
}

const resultFilter = arr.filter(evenOrOdd)

console.log("Filter result : ",resultFilter)


//reduce (another hof)

// in this we have 2 parameter - > first is previous value and 2nd is current value
// it returns a single result for an array

function sum(previousVal, curVal){
    return previousVal+curVal;
}

const resultSum = arr.reduce(sum);

console.log("Sum of array : "+resultSum)


