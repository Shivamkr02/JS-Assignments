function operate(){
    // Add the class highlight to all children of div
    let div = document.querySelector("div");
    let children = div.children;

    Array.from(children).forEach(x =>{
        x.classList.add("highlight");
    });
}