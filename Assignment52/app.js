function operate(){
    // Access the second li

    let l1 = document.querySelector("li");
    let l2 = l1.nextElementSibling;
    console.log(l2);

    // Access the last <li>

    let ul = document.querySelector("ul");
    let last = ul.lastElementChild;
    console.log(last);
}