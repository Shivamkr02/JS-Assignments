// let x=1;

// function printNos(){

//     document.write(`${x}<br>`);
//     x++;
//     if(x==11){
//         clearInterval(y);
//         document.write("Done!!");
//     }
// }

// let y = setInterval(printNos,1000);


//                   **Anonymous Function**

// let x=1;

// let y = setInterval(function (){

//     document.write(`${x}<br>`);
//     x++;
//     if(x==11){
//         clearInterval(y);
//         document.write("Done!!");
//     }
// },1000);


//                  **Arrow Function**


let x=1;

let y = setInterval(()=>{

    document.write(`${x}<br>`);
    x++;
    if(x==11){
        clearInterval(y);
        document.write("Done!!");
    }
},1000);


