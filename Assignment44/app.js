function show(){
    let nav = document.getElementById("nav2");
    let li = nav.getElementsByTagName("li");

    let arr = Array.from(li);
    arr.forEach(x =>{
        console.log(x);
    });
}