function showDate(){
    let p = document.querySelector("p");
    let date = new Date();
    let day = date.getDate();
    let mon = date.getMonth();
    let year = date.getFullYear();

    p.innerText = day + "-" + mon + "-" + year;

    p.style.color = "crimson";
    p.style.fontWeight="bold";
   
}

