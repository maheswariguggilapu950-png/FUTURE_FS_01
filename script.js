const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

});

elements.forEach(el => {
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="1s";
});
