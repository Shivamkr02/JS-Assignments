function operate(){
    document.body.bgColor="yellow";
}

function operate1(){
    var img = document.images[0];
    img.src="./images/download (1).jpeg";
}

function operate2(){
    var link = document.links[1];
    link.href="https://pwskills.com/";
}

function operate3(){
    let ul = document.querySelector("ul");
    let all = ul.querySelectorAll("li");
    all.forEach(x =>{
        console.log(x);
    })
}

function operate4(){
    let para = document.querySelectorAll("p");
    console.log(para);
}

function operate5(){
    let heading = document.querySelectorAll("h3");
    heading.forEach(x =>{
        console.log(x);
    })
    console.log(heading);
}