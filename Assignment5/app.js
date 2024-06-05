let a=prompt("Enter the character");

let res="It is ";
a = a.tolowercase();
switch(a){
    case "a":
        res += "a vowel";
        break;
    
    case "e":
        res += "a vowel";
        break;

    case "i":
        res += "a vowel";
        break;

    case "o":
        res += "is a vowel";
        break;

    case "u":
        res += "is a vowel";
        break;

    default:
        res += "is not vowel";
}
document.write(`${res}`);
