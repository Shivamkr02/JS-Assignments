let birthYear;
let age;
const currYear = new Date().getFullYear();  // Get the current year dynamically

do {
    birthYear = prompt("Enter your birth year:");
    age = currYear - birthYear;
} while (age <= 0);

document.write(`Your current age is ${age}</br>`);

if (age >= 18) {
    document.write("You are eligible to vote");
} else {
    document.write("You are not eligible to vote");
}
