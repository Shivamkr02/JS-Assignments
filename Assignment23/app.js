function average(){
    let sum = 0;
    let count = arguments.length;

    for(let i=0;i<count;i++){
        sum+=arguments[i];
    }

    let avg = sum/count;

    return {sum,avg};
}

let result = average(2,4,6,8,10);
document.write(`sum: ${result.sum}<br>`);
document.write(`Average: ${result.avg}`);