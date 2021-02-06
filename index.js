/* global console,alret,prompt*/
window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled > 50){
        document.getElementById("nav").style="background-color: rgb(26, 22, 22);animation-name: background-color;animation-delay: 0s;animation-duration: 3s;animation-iteration-count: 1;";

    }
    else{
        document.getElementById("nav").style="background-color: transparent;";
    }
    });