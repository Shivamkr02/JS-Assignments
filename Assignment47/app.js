function showLink(){
    let siteName = prompt("Enter Site name with . extension");
    let a = document.querySelector("a")
    a.setAttribute("href","https://www."+siteName);
    let dotpos = siteName.indexOf(".");
    let name = siteName.substring(0,dotpos);
    a.innerText = "visit" + name;
}