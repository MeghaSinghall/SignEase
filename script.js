const var1=document.querySelector("#chattext");
const var2=document.querySelector("#chatdiv");
var1.addEventListener("keyup",e=>{
    var1.style.height="25px";
    let height1=e.target.scrollHeight;
    var1.style.height=`${height1}px`;
    var2.style.height=`${height1+20}px`;
});
<<<<<<< HEAD

=======
>>>>>>> 8eaddbab88a28f28e2aa516924eee5e61e348007
document.getElementById("chatbtn").onclick=function(){
    let input1=document.getElementById("chattext").value;
    console.log(input1);
}
document.getElementById("chatrfs").onclick=function(){
    document.getElementById("chattext").value="";
<<<<<<< HEAD
}
=======
}
>>>>>>> 8eaddbab88a28f28e2aa516924eee5e61e348007
