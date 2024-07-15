
// toggle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// remover o menu de selecionar a cor quando scroll a pagina
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// temas de cor
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){
    alternateStyles.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

if(localStorage.getItem("color") !== null){
    changeColor();
}

// light e dark mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
    updateIcon();
})

function themeMode(){
    const savedTheme = localStorage.getItem("theme");
    
    if(savedTheme === null || savedTheme === "dark"){
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    updateIcon();
}

// Chama a função quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    themeMode();
});

function updateIcon(){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}