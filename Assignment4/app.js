let number = prompt("Enter the number: ");
let absValue;
if(isNaN(number)){
    document.write(`Please input valid number </br>`);
}
else{
    if(number>=0){
        absValue = number;
    } 
    else{
        absValue = -number;
    }
}
document.write(`The of absolute value of ${number} is ${absValue}`);