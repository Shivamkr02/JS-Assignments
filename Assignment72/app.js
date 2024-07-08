const x = document.getElementById("mytext");

x.onkeypress = (e) => {
    if(e.charCode < 48 || e.charCode > 57){
        x.style.outlineColor = "red";
        
        return false;
    }else{
        x.style.outlineColor = "green";
        
    }
};