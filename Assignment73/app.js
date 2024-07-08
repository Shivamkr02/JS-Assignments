const heading = document.querySelector("h3");

heading.addEventListener("dblclick", () =>{
    heading.style.fontStyle = "italic";
});

const img = document.querySelector("img");


img.addEventListener("mouseover",() =>{
    img.src = "./img.jpeg";
});

img.addEventListener("mouseover",()=>{
    img.style.width = "400px";
});

