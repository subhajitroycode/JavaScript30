const nav = document.querySelector(".top");
const background = document.querySelector(".dropdownBackground");
const triggers = document.querySelectorAll(".cool > li");

function handleEnter() {
    this.classList.add("trigger-enter");
    setTimeout(() =>  this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
    background.classList.add("open");
    
    const dropdown = this.querySelector(".dropdown");
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
    
}

function handleExit() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleExit));