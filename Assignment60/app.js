function addItem(){
    let colorToAdd = prompt("Enter color Name");
    let afterColor = prompt("Enter the color name after which you want to add");
    let ul = document.querySelector("ul");

    let listItems = Array.from(ul.getElementsByTagName("li"));

    const afterLi = listItems.find(li => 
        li.textContent.toLowerCase() === afterColor.toLowerCase());

        if(afterLi){
            const newLi = document.createElement("li");
            newLi.style.color = colorToAdd;
            newLi.textContent = colorToAdd.charAt(0).toUpperCase() + colorToAdd.slice(1);
            ul.insertBefore(newLi,afterLi.nextElementSibling);

        }
        else{
            alert(`Color ${afterColor} not found!`)
        }
    
}