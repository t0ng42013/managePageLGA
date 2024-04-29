// menu hamburguesa
const btnHamburger = document.getElementById("btnHamburger");
const menuMobile = document.getElementById("menuMobile");

btnHamburger.addEventListener("click", () => {
  menuMobile.classList.toggle("showMenu");
});

// slider de card
const containerCard = document.getElementById("containerSld");
const slides = document.querySelector(".slides");
const bars = [...document.querySelectorAll(".bar")];



bars.forEach((i) => {
  i.addEventListener("click", (e) => {
    bars.forEach((bar) => bar.classList.remove("barActive"));
    i.classList.add("barActive");
   let index = bars.indexOf(i)
    slides.style.transform = `translateX(-${index * slides.offsetWidth}px)`;
    
  });
});
