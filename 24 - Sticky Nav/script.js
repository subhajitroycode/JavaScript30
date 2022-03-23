const nav = document.getElementById("main");
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add("fixed-nav");
    }
    else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav")
    }
    console.log(nav.offsetHeight);
}

window.addEventListener("scroll", fixNav);