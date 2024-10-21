const statusMessage = document.getElementById('statusMessage');
const tbox = document.getElementById('chattext');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const video = document.getElementById('bodyvdo');

const var1=document.querySelector("#chattext");
const var2=document.querySelector("#chatdiv");

var1.addEventListener("keyup",e=>{
    var1.style.height="25px";
    let height1=e.target.scrollHeight;
    var1.style.height=`${height1}px`;
    var2.style.height=`${height1+20}px`;
});

// var1.addEventListener("keydown", function(event){
//     if(event.key =="Enter"){
//         event.preventDefault();
//         btnclick();
//     }
// });

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

var d1=0;
function btnclick(){
    console.log(tbox.value);
    // if(d1==1)
    // {
    //     video.style.display='none';
    //     d1=0;
    // }
    if(d1==0) {
        video.style.visibility='visible';
        d1=1;
    }

    console.log("API call initiated...");

    const apiUrl = `https://34.122.209.207/text/${encodeURIComponent(tbox.value)}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json(); // Assuming the response contains JSON data with the video URL
            }
            throw new Error('No video found');
        })
        .then(data => {
            videoSource.src = data.videoUrl; // Assuming the API returns a JSON object with a videoUrl property
            videoPlayer.load();
            video.style.visibility = 'visible';
            statusMessage.innerHTML = 'Status Message: Video is loading....';
            statusMessage.style.color = "rgb(70, 207, 70)";
        })
        .catch(error => {
            statusMessage.innerHTML = `Error: ${error.message}`;
            statusMessage.style.color = "rgb(255, 0, 0)";
            console.error('Error:', error);
        });


    // fetch(apiUrl)
    //     .then(response => {
    //         if (response.ok) {
    //             // If response is OK, set video source and load the video
    //             videoSource.src = apiUrl;
    //             videoPlayer.load();
    //             video.style.visibility = 'visible';
    //             statusMessage.innerHTML = 'Status Message: Video is loading....'
    //             statusMessage.style.color = "rgb(70, 207, 70)";
    //         }
    //          else {
    //             statusMessage.innerHTML = "Status Message: No video found for the input.";
    //             statusMessage.style.color = "rgb(255, 0, 0)";
    //         }
    //     })
    //     .catch(error => {
    //         statusMessage.innerHTML = `Error: ${error.message}`;
    //         statusMessage.style.color = "rgb(255, 0, 0)";
    //         console.error('Error:', error);
    //     });

}



document.getElementById("chatrfs").onclick = function() {
    tbox.value = "";
    var1.style.height = `28px`;
    var2.style.height = `48px`;
    d1 = 0; // Ensure d1 is reset
    videoSource.src = '';
    videoPlayer.load();
    statusMessage.innerHTML = "Status Message: Processing request...";
    statusMessage.style.color = "rgb(23, 158, 237)";
    statusMessage.style.visibility = 'hidden';
    video.style.visibility = 'hidden';
};


// document.getElementById("chatrfs").onclick=function(){
//     tbox.value="";
//     var1.style.height=`${28}px`;
//     var2.style.height=`${48}px`;
//     if(d1==1)
//         {
//             video.style.visibility='visible';
//             d1=0;
//         }
//     // else {
//     //     video.style.display='none';
//     //     d1=1;
//     // }
//     videoSource.src = '';
//     // videoPlayer.load();
//     // statusMessage.innerHTML = "Status Message: Processing request...";
//     // statusMessage.style.color = "rgb(23, 158, 237)";
//     statusMessage.style.visibility = 'hidden';
//     video.style.visibility = 'hidden';
    
// }