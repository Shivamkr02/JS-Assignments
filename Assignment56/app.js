function addCourses(){
    let div = document.querySelector("div");
    // let newUl = document.createElement("ul");
    // let ul = document.querySelector("ul");
    let newLi1 = document.createElement("li");
    let addText1 = document.createTextNode(`C`);
    newLi1.appendChild(addText1);
    div.appendChild(newLi1);


    let newLi3 = document.createElement("li");
    let addText3 = document.createTextNode(`C++`);
    newLi3.appendChild(addText3);
    div.appendChild(newLi3);

    let newLi4 = document.createElement("li");
    let addText4 = document.createTextNode(`Java`);
    newLi4.appendChild(addText4);
    div.appendChild(newLi4);

    let newLi5 = document.createElement("li");
    let addText5 = document.createTextNode(`Python`);
    newLi5.appendChild(addText5);
    div.appendChild(newLi5);

    let newLi6 = document.createElement("li");
    let addText6 = document.createTextNode(`JavaScript`);
    newLi6.appendChild(addText6);
    div.appendChild(newLi6);

    let newLi7 = document.createElement("li");
    let addText7 = document.createTextNode(`goLang`);
    newLi7.appendChild(addText7);
    div.appendChild(newLi7);
}