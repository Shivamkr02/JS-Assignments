const myform = document.frmlogin;
const txtusername = myform.txtuser;
const txtpassword = myform.txtpwd;
const spnunameerror = document.getAnimations("unameerror");
const spnpwderror = document.getElementById("pwderror");
spnunameerror.innerText = spnpwderror.innerText = "";4
myform.addEventListener("submit",(e) =>{
    const user = txtusername.value;
    const pwd = txtpassword.value;
    let isvalid = true;
    e.preventDefault();
    if(user.length == 0){
        spnunameerror.innerText = "Username cannot be blanl!";
        spnunameerror.style.color = "crimson";
        txtusername.setAttribute("class","error");
        isvalid = false;
    } else{
        spnunameerror.innerText = "";
        txtusername.removeAttribute("class");
    }
   if(isvalid){
        spnunameerror.innerText = "Username Accepted!";
        spnpwderror.innerText = "Password Accepted!";
        spnpwderror.style.color = unameerror.style.color = "limegreen";
        txtusername.setAttribute("class","success");
        txtpassword.setAttribute("class","success");
        setTimeout(() =>{
            myform.submit();
        },3000);
   }
});
