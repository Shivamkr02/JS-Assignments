function sum(a,b,callback){
    let result = a+b;
    callback(result);
}

function printResult(result){
    console.log("Result is : " + result);
}

sum(5,6,printResult);