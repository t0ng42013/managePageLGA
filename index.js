// menu hamburguesa
const btnHamburger = document.getElementById("btnHamburger");
const menuMobile = document.getElementById("menuMobile");

btnHamburger.addEventListener("click", () => {
  menuMobile.classList.toggle("showMenu");
  const btnHamburger = document.querySelector(".hamburger");
  const btnClose = document.querySelector(".close");
  const over = document.querySelector(".overlay");

  if(menuMobile.classList.contains("showMenu")){
    btnHamburger.style.display = "none";
    btnClose.style.display = "block";
    over.style.display = "block";
    return
    }
    btnHamburger.style.display = "block";
    btnClose.style.display = "none";
    over.style.display = "none";

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


// slides desktop
const card = document.querySelector(".card");
let ancho = slides.clientWidth
let bandera = ancho

// Agregar evento wheel al div scrollable
slides.addEventListener('wheel', (e) => {
  // Obtener el desplazamiento horizontal actual
  const currentScrollLeft = slides.scrollLeft;
  
  // Calcular el nuevo desplazamiento basado en la dirección y cantidad del desplazamiento del evento de rueda
  const newScrollLeft = currentScrollLeft + e.deltaY;
  
  // Aplicar el nuevo desplazamiento al div scrollable
  slides.scrollLeft = newScrollLeft;
  
  // Prevenir el comportamiento predeterminado del evento de rueda para evitar desplazamiento de la ventana
  e.preventDefault();
});
 
const btnForm = document.querySelector('.btnForm');

btnForm.addEventListener('click',e => e.preventDefault());