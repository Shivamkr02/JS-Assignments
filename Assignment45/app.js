function operate(){
    let ul = document.querySelector("ul");
    let li = ul.querySelectorAll("li");
    li.forEach(x =>{
        x.innerText=x.innerText.toUpperCase();
    })
}