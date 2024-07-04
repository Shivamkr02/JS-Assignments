function addPara(){
    let div = document.querySelector("div");
    let newPara = document.createElement("p");
    let addText = document.createTextNode(`I am para ${div.children.length + 1}`);
    newPara.appendChild(addText);
    div.appendChild(newPara);
}