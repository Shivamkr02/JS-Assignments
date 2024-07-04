function addCourses(){
    // Writ to generate programming langauges list

    let langauges = ["C","C++","Python","Java","JavaScript","PhP"];

    let div = document.querySelector("div");

    let myList = document.createElement("ul");

    langauges.forEach(name => {
        myList.innerHTML += "<li>" + name + "</li>";
    });

    div.appendChild(myList);
}