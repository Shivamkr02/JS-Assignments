function operate(){
    let div = document.querySelector("div");
    let allchild = div.children;
    console.log(div.childNodes);
    console.log(allchild);
    Array.from(allchild).forEach(x =>{
        x.style.color = "crimson";
    });
   
}