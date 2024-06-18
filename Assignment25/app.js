let myCar = new Object();

myCar.company="TATA";
myCar.name="Harrier";
myCar.year=2026;

myCar.stereo = new Object():
myCar.stereo.name = "Sony";
myCar.stereo.maxVol = 90;

for(key in myCar){
    if(typeof myCar[key] !== 'object')
        console.log(key + ":" +myCar[key]);
    else{
        for(x in myCar[key])
            console.log(x + ":" + myCar[key][x]);
    }
}
