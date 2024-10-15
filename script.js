var vdobox=document.getElementById("bodyvdo");
var d1=0;

const var1=document.querySelector("#chattext");
const var2=document.querySelector("#chatdiv");
var1.addEventListener("keyup",e=>{
    var1.style.height="25px";
    let height1=e.target.scrollHeight;
    var1.style.height=`${height1}px`;
    var2.style.height=`${height1+20}px`;
});

document.getElementById("chatbtn").onclick=function(){
    let input1=document.getElementById("chattext").value;
    console.log(input1);
    
    // if(d1==1)
    // {
    //     vdobox.style.display='none';
    //     d1=0;
    // }
    if(d1==0) {
        vdobox.style.display='block';
        d1=1;
    }
}
document.getElementById("chatrfs").onclick=function(){
    document.getElementById("chattext").value="";

    if(d1==1)
        {
            vdobox.style.display='none';
            d1=0;
        }
    // else {
    //     vdobox.style.display='none';
    //     d1=1;
    // }
}