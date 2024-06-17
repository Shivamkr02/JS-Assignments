
const inputArray = [1, 3, 6, 2, 5, 10];

const firstPart = [];
const secondPart = [];

for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 === 0) {
        firstPart.push(inputArray[i]);
    } else {
        secondPart.push(inputArray[i]);
    }
}

const firstPartSum = firstPart.reduce(function(acc, val) {
    return acc + val;
}, 0);

const secondPartSum = secondPart.reduce(function(acc, val) {
    return acc + val;
}, 0);

document.write(`Sum of the first part: ${firstPartSum}<br>`);
document.write(`Sum of the second part: ${secondPartSum}`);
