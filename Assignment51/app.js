function decorate(){
    let para = document.querySelectorAll("p");
    para.forEach(x =>{
        const text = x.innerText;

        if(text.includes('error')){
            x.classList.add("error");
        }
        else if(text.includes('success')){
            x.classList.add("success");
        }
    });
}