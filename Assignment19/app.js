let numbers = [];

for(let i=0;i<5;i++){
    let a = prompt("Enter Names");

    numbers.push(a);
}
// document.write(`${names}`);

let newArray = [];

let checkNum = prompt("Enter the number to check its ocurances");

for(let i=0;i<numbers.length;i++){
    if(numbers[i] !== checkNum){
        newArray.push(numbers[i]);
    }
}
document.write(`Old Array ${numbers}<br>`);
document.write(`New Array ${newArray}`);
