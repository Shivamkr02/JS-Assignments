function processArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

function printElement(element){
    console.log(element);
}

processArray([10,15,25,30,89,36],printElement);