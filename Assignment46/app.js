function operate(){
    let courseName = prompt("Enter course Name");
    let ul = document.querySelector("ul");
    ul.innerHTML += "<li>" + courseName + "</li>"
}