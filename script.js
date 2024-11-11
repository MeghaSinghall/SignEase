const statusMessage = document.getElementById('statusMessage');
const initialMessage = document.getElementById('initialMessage');
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

var1.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        event.preventDefault();
        btnclick();
    }
})


function btnclick(){
    console.log(tbox.value);
    if(tbox.value){
        video.style.display = 'block';
        initialMessage.style.display = 'none';
        console.log("API call initiated...");
        if(videoPlayer.style.display == 'block'){
            videoPlayer.style.display = 'none';
        }
        statusMessage.innerHTML = "Processing request...";
        statusMessage.style.color = "rgb(23, 158, 237)";
        statusMessage.style.display = 'block';

        const apiUrl = `https://signeaseapiagain-gudcfqe3cbbnhkea.centralindia-01.azurewebsites.net/text/${encodeURIComponent(tbox.value)}`;

        fetch(apiUrl)
            .then(response => {
                if (response.ok) {
                    videoSource.src = apiUrl;
                    videoPlayer.load();
                    videoPlayer.style.display = 'block';
                    statusMessage.innerHTML = 'Video is loading....';
                    statusMessage.style.color = "rgb(70, 207, 70)";
                    statusMessage.style.display = 'block';
                }else{
                    statusMessage.innerHTML = "No Video found for the input."
                    statusMessage.style.color = "rgb(255, 0, 0)";
                    statusMessage.style.display = 'block';
                }
            
            })
            .catch(error => {
                statusMessage.innerHTML = `Error: ${error.message}`;
                statusMessage.style.color = "rgb(255, 0, 0)";
                statusMessage.style.display = 'block';
                console.error('Error:', error);
            });

        }    

}


document.getElementById('chatrfs').onclick = function() {
    tbox.value = "";
    var1.style.height = `28px`;
    var2.style.height = `48px`;
    // d1 = 0; // Ensure d1 is reset
    videoSource.src = '';
    videoPlayer.load();
    statusMessage.innerHTML = "Status Message: Processing request...";
    statusMessage.style.color = "rgb(23, 158, 237)";
    statusMessage.style.display = 'none';
    video.style.display = 'none';
    videoPlayer.style.display = 'none';
};
