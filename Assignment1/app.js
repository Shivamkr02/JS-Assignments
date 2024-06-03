let a = prompt("Enter the number");

if(isNaN(a)){
    document.write(`You did not input a number`);
}
else if(a%2 === 0){
    document.write(`${a} is even number`);
}
else{
    document.write(`${a} is an Odd number`);
}