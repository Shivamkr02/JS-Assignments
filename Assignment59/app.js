function addPara(){
    let div = document.querySelector("div");

    let newPara = document.createElement("p");
    let newText = document.createTextNode("I am para 3");
    newPara.appendChild(newText);

    let fpara = document.getElementById("p1");
    div.insertBefore(newPara,fpara);
}