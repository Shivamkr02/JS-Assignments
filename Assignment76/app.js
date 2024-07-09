let listitems = document.querySelectorAll("li");


listitems.forEach((item) =>{
    item.addEventListener("click",(e) =>{
        console.log("li Clicked",e.type);
        e.stopPropagation();
    });
});


let ul = document.querySelector("ul");

ul.addEventListener("keypress", (e) => {
    console.log("ul pressed",e.type);
});