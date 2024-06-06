let a = prompt("Enter the Month number");

let num = Number(a);

switch(num){
    case 3: case 4: case 5: case 6:
        document.write(`Entered month is summer season`);
        break;

    case 7: case 8: case 9: case 10:
        document.write(`Entered month is Rainy season`);
        break;

    case 11: case 12: case 1: case 2:
        document.write(`Entered month is winter season`);
        break;

    default:
        document.write(`Wrong month number`);
}