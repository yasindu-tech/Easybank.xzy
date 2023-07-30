const hamburger =document.querySelector('#hamburgerBtn');
const overlay =document.querySelector('#overlay');
const overlay_links =document.querySelector('#overlay_links');

const footer = document.querySelector("#footer")

//navbar
hamburger.addEventListener('click',function(){
    console.log("clicked");
    hamburger.classList.toggle('open');
    overlay.classList.toggle('overlay');
    overlay_links.classList.toggle('display-none');
});



