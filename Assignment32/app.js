function multiply(a,b,callback){
    let result = a*b;
    callback(result);
}

function printResult(result){
    console.log("Multiplication between a and b is : " + result);
}

multiply(9,5,printResult);