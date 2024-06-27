function show(){
    let text = prompt("Type a string");
    let len = text.length;
    document.write(`The length of ${text} is ${len}<br>`);




    let first = text.charAt(0);
    document.write(`The first character of ${text} is ${first}<br>`);

    
    
    
    let last = text.charAt(len-1);
    document.write(`The last character of${text} is ${last}<br>`);
}