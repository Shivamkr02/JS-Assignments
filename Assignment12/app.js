let number = Number(prompt("Enter a number to find its factorial:"));


if (Number.isInteger(number) && number >= 0) {
   
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

   
    document.write(`<p>Factorial of ${number} is ${result}</p>`);
} else {

    document.write(`<p>Please enter a non-negative integer.</p>`);
}
