let a = Number(prompt("Enter the integer"));


let sumOfEven=0;

let sumOfOdd =0;
for(let i=1;i<=a;i++){
    if(i%2 === 0){
        sumOfEven += i;
    }
    else{
        sumOfOdd += i;
    }
}
document.write(`Sum of Even number is : ${sumOfEven}</br>`);
document.write(`Sum of Odd number is : ${sumOfOdd}</br>`);
