// Prompt user to enter an integer
let input = prompt("Enter an integer:");
let num = parseInt(input);

// Validate the input
if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    // Array to store prime numbers
    let primes = [];

    // Loop to check for prime numbers up to the given number
    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        // Check if the current number is prime
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If the number is prime, add it to the array
        if (isPrime) {
            primes.push(i);
        }
    }

    // Print the prime numbers
    console.log("Prime numbers up to " + num + ":");
    console.log(primes.join(", "));
}
