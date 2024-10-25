let numbers = [1,2,3,4,3,2,5,6,1,8,7,5];
let uniqueNumbers = [];
for(let i=0;i<numbers.length;i++){
    let isDuplicate = false;
    for(let j=0;j<uniqueNumbers.length;j++){
        if(numbers[i]===uniqueNumbers[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        uniqueNumbers.push(numbers[i]);
    }
}
document.write(`${uniqueNumbers}`);
