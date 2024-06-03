let a = prompt("Enter the number");

if(isNaN(a)){
    document.write(`YOu did not input a number`)
}
else if(a<0){
    document.write(`${a} is a negative number`);
}
else if(a>=0 && a<10){
    document.write(`${a} is a single digit positive integer number`);
}
else if(a>=10 && a<100){
    document.write(`${a} is a double digit positive integer number`);
}
else{
    document.write(`${a} is a three digit or more than three digit positive integer number`);
}