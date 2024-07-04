function showTime(){
    setInterval(()=>{
        let date = new Date();
    
        let hh = date.getHours();
        
        let mm = date.getMinutes();
        
        let ss = date.getSeconds();
    
       let div = document.querySelector("div");
       div.innerText = ` ${hh} : ${mm} : ${ss}`;
    },1000)
}

