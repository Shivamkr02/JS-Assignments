
let students = {
    name : "Sumit",
    age : 15,
    phy : 45,
    chem : 50,
    maths : 65
};
let sum = 0;
for(key in students){
    if(typeof students[key] === 'number')
        if(key !== 'age')
            sum += students[key]; 
}

document.write(`<br> Total : ${sum}`);