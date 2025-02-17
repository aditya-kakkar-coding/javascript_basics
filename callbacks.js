/* function which take function as an argument , it is called higher order function
the function which is the argument of hof is callback function

problems with callbacks
1. inversion of control

swiggy is using razor pay api's
imagine if api is consuming a callback function which is depended on another
function and there we make some changes without being aware it is getting consumed 
by another function which created a bug there. So swiggy will actually face the bug and 
lose customers.
this is high priority based issue

2. callback hell

nested calledback functions
hard to read but functions properly
*/

function hof( a, callback){
    console.log("inside hof");
    console.log(a)
    callback();
}

function callback(){
    console.log("inside callback");
}

hof(10,callback)


function hof_func(a, callback_funct = () => {
    console.log("inside callback 2nd function");
    return 0;
}) {
    console.log("inside hof 2nd function");
    
    // Call the callback function
    const result = callback_funct();
    console.log("Callback returned:", result);
}

// Call the function
hof_func(10);



