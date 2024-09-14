function mySort(a,b){

    if(a>b)
        return 1;
    else if(b>a)
        return -1;
    else
        return 0;
}

let arr = [7,2,9,1,5,25];
document.write("<b>Before Sorting: </b><br>");
for(let x of arr)
    document.write(`${x}<br>`);
document.write("<br>");
arr.sort(mySort);
document.write("<br>");
document.write("<b>After Sorting: </b><br>");
for(let x of arr)
    document.write(`${x}<br>`);
