let inputArray = [NaN,0,15,false,-22,"",undefined,47,null,94];

let outputArray = [];

for(let i=0;i<inputArray.length;i++){
    let value = inputArray[i];

    if(value !== 0 && value !== false && value !== undefined && value !== null && !Number.isNaN(value) && value !== ""){
        outputArray.push(value);
    }
} 

document.write(`Output Array: ${outputArray}`);
