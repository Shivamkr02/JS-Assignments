let userinput = prompt("Enter a string: ");

let vowels = ['a','e','i','o','u','A','E','I','O','U'];

let count = 0;

for(let i=0;i<userinput.length;i++){
    if(vowels.includes(userinput[i])){
        count++;
    }
}

document.write(`The string contains ${count} vowels`);