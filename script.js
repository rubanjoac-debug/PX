// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

}

// ================= NAVBAR SCROLL =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(header){

    if(window.scrollY > 50){
      header.style.background = "#050816";
      header.style.boxShadow =
      "0 0 20px rgba(0,0,0,0.4)";
    }

    else{
      header.style.background =
      "rgba(0,0,0,0.4)";

      header.style.boxShadow = "none";
    }

  }

});

// ================= TESTIMONIAL SLIDER =================

const testimonialText =
document.querySelector(".testimonial-box p");

const testimonialName =
document.querySelector(".testimonial-box h4");

if(testimonialText && testimonialName){

  const testimonials = [

  {
    text:"PhenomX transformed our business with a powerful online identity.",
    name:"John D."
  },

  {
    text:"Professional, creative and modern web solutions.",
    name:"Sarah M."
  },

  {
    text:"Outstanding branding and digital marketing services.",
    name:"Michael K."
  }

  ];

  let currentTestimonial = 0;

  function changeTestimonial(){

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){
      currentTestimonial = 0;
    }

    testimonialText.innerText =
    testimonials[currentTestimonial].text;

    testimonialName.innerText =
    "- " +
    testimonials[currentTestimonial].name;

  }

  setInterval(changeTestimonial, 5000);

}
