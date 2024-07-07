let x = document.getElementById("mypic");

x.onmouseover = () => {
    x.setAttribute("src","./img.jpeg");
};

x.onmouseout = () => {
    x.setAttribute("src","./img1.jpeg");
}