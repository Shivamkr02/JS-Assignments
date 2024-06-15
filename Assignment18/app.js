
let names = [];


for (let i = 0; i < 5; i++) {
    let name = prompt("Enter a name:");
    names.push(name);
}


let searchName = prompt("Enter a name to search for:");


let indices = [];
let idx = names.indexOf(searchName);

while (idx !== -1) {
    indices.push(idx);
    idx = names.indexOf(searchName, idx + 1);
}


if (indices.length > 0) {
    document.write(`The name "${searchName}" was found at the following positions: ${indices.join(", ")}`);
} else {
    document.write(`The name "${searchName}" was not found.`);
}
