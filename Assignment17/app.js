let input = prompt("Enter an integer:");
let num = parseInt(input);
if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
} else {  
    let primes = [];
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }

    console.log("Prime numbers up to " + num + ":");
    console.log(primes.join(", "));
}
