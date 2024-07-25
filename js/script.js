const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
    activeLink();
    if(!skillsPlayed) skillsCounter();
    if(!mlPlayed) mlCounty();
    
});

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num,maxNum);
        }, 12);
    }
}
/* ----------- abrir e fechar navbar menu ----------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) => 
link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
})
);


/* ----------- codigo do Navbar ----------- */

function stickNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset > 0);
 }
 
 stickNavbar();
 
 window.addEventListener("scroll", stickNavbar);
 
/* ----------- faq de serviços ----------- */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        }else {
            pannel.style.display = "block";
        }
    });
}
/* ----------- Digitilazação ----------- */
const typed = new Typed(".text-home", {
    strings: ["Frontend Developer", "Geolocalização","Social Midia","Trafego Pago", "Designer UI/Ux","Automação Web"],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });