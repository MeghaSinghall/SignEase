const var1=document.querySelector("#chattext");
const var2=document.querySelector("#chatdiv");
var1.addEventListener("keyup",e=>{
    var1.style.height="25px";
    let height1=e.target.scrollHeight;
    var1.style.height=`${height1}px`;
    var2.style.height=`${height1+20}px`;
});