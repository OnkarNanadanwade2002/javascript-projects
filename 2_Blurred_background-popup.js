const contaner = document.querySelector(".container");

const btn = document.querySelector(".btn");

const popupcontainer = document.querySelector("popup-container");

const closeicon = document.querySelector(".close-icon");

btn.addEventListener("click",()=>{
        contaner.classList.add("active");
        popupcontainer.classList.remove("active");

});

closeicon.addEventListener("click",()=>{
    contaner.classList.remove("active");
    popupcontainer.classList.add("active");
});