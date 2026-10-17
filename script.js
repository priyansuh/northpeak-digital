document.addEventListener("DOMContentLoaded",function(){
    console.log("NorthPeak Digital is ready");
    const menuToggle=document.querySelector(".menu-toggle");
    const navig=document.querySelector(".go");

    if(!menuToggle||!navig){
        return;
    }

    menuToggle.addEventListener("click",function(){
        const isOpen=navig.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded",isOpen);
        menuToggle.setAttribute("aria-label",isOpen?"close navigation menu":"Open navigation menu");
        menuToggle.textContent=isOpen?"✕" : "☰";
    });

    navig.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click",function(){
            navig.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded","false");
            menuToggle.setAttribute("aria-label","Open navigation menu");
            menuToggle.textContent="☰";
        });
    });
});