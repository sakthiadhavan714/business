var countdown=5;
document.getElementById("tag-register").addEventListener("click",()=>{
    document.getElementsByClassName("popup-thankyou")[0].style.display="block";
    setInterval(()=>{
        document.getElementsByClassName("timer")[0].innerHTML=--countdown;
        if(countdown==0) window.location.href =window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1)+'index.html';
    },1000)
})