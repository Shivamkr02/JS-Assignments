let myCar = new Object();

myCar.company="TATA";
myCar.name="Harrier";
myCar.year=2026;
myCar.average = 12.5;

for(let i in myCar){
    console.log(myCar[i]);
}
