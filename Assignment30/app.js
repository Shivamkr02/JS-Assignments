function area (rad,show){
    let ar = 3.14 * rad * rad;
    show(ar);
}

function display (ar){
    document.write(`Area of Circle is ${ar}`);
}

area(5,display);