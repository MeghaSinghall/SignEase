const input1=document.getElementById("chattext");

const var1=document.querySelector("#chattext");
const var2=document.querySelector("#chatdiv");
var1.addEventListener("keyup",e=>{
    var1.style.height="25px";
    let height1=e.target.scrollHeight;
    var1.style.height=`${height1}px`;
    var2.style.height=`${height1+20}px`;
});

var vdobox=document.getElementById("bodyvdo");
var d1=0;
function btnclick(){
    console.log(input1.value);
    
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

var1.addEventListener("keyup",e=>{
    e.preventDefault();
    if(e.keyCode===16){
        var1.addEventListener("keyup",e=>{
            e.preventDefault();
            if(e.keyCode===13){
                btnclick();
            }
        })
    }
})

document.getElementById("chatrfs").onclick=function(){
    input1.value="";
    var1.style.height=`${28}px`;
    var2.style.height=`${48}px`;
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