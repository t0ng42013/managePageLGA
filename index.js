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


// slides desktop
const card = document.querySelector(".card");
let ancho = slides.clientWidth
let bandera = ancho

slides.addEventListener('click', (e) => { 
 
  if(ancho > 599){
    const card = document.querySelectorAll(".card");
    if(bandera <= 2000) {
    
    card.forEach((slide) =>{
      slide.style.transform +="translate(-540px)"
    } )
   
    bandera += 550;
    console.log(bandera);
    }
    if (bandera >= 2263){
      setTimeout(() => {
        bandera = ancho
      card.forEach((slide) => {
        slide.style.transform = "translateX(0px)"
      })
      }, 2000);

    }
  }
  
});
