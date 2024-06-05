let ch = prompt("Enter the character");

let res = "It is";
ch = ch.toLowerCase();

switch(ch){
    case "a": case "e": case "i": case "o": case "u":
        res += " a vowel";
        break;

    default:
        res += " not a vowel";
}

document.write(`${res}`);