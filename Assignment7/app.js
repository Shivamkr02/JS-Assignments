let a=prompt("Enter the number");

if (isNaN(a)){
    document.write(`You did not input a number`);
}
else{
    switch(a%2){
        case 0:
            document.write(`The number is even`);
            break;

        case 1:
            document.write(`The number is odd`);
            break;
    }
}
