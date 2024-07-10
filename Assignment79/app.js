const frm = document.myfrm;

const firstno = myfrm.txtfno;

const secondno = myfrm.txtsno;

const res = myfrm.txtresult;

const btn = myfrm.btnadd;

const btnclear = myfrm.btnclear;

btn.addEventListener("click",() =>{
    let first = firstno.value;
    let second = secondno.value;
    res.value = Number(first) + Number(second);

});


btnclear.addEventListener("click",()=>{
    firstno.value=secondno.value=res.value="";
});



