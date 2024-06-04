let a=prompt("Enter a int: ");
 

// Method 1
// a%2 === 0 ? document.write(`${a} is even`) : document.write(`${a} is odd`);

isNaN(a)==true ? document.write("You did not input a number") : a%2 === 0 ? document.write(`${a} is even`) : document.write(`${a} is odd`);