let a =Number(prompt("Enter the integer"));

document.write(`<h3>Table of ${a}</h3>`)
document.write(`<table border='2'>`);
for(let i=1;i<=10;i++){
    // document.write(`${i} * ${num} = ${i*num}</br>`);
    document.write(`<tr><td>${i} * ${a} = ${i*a}</td></tr>`);
}
document.write(`</table`);
