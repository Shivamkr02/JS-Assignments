function show(){
    let str = prompt("Enter your dob(month dd,yyyy)");
    let dob = new Date(str);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday","Friday", "Satuarday"];
    document.write(`You were born on ${days[dob.getDay()]}`);
}

