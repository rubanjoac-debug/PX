// REPLACE YOUR CURRENT script.js WITH THIS

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= NAVBAR BACKGROUND =================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "#050816";
    header.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";
  }
  else{
    header.style.background = "rgba(0,0,0,0.4)";
    header.style.boxShadow = "none";
  }

});

// ================= SCROLL ANIMATION =================

const revealElements = document.querySelectorAll(
  ".service-card, .about-card, .project-card, .testimonial-box, .stat-box"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {

    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.classList.add("show");
    }

  });

}

revealOnScroll();

// ================= TESTIMONIAL SLIDER =================

const testimonials = [

{
  text: "PhenomX transformed our business with a powerful online identity and outstanding branding.",
  name: "John D."
},

{
  text: "Professional, creative and very reliable. Our website now looks world-class.",
  name: "Sarah M."
},

{
  text: "Excellent service delivery and modern designs. Highly recommended digital agency.",
  name: "Michael K."
}

];

const testimonialText =
document.querySelector(".testimonial-box p");

const testimonialName =
document.querySelector(".testimonial-box h4");

let currentTestimonial = 0;

function changeTestimonial(){

  currentTestimonial++;

  if(currentTestimonial >= testimonials.length){
    currentTestimonial = 0;
  }

  testimonialText.innerText =
  testimonials[currentTestimonial].text;

  testimonialName.innerText =
  "- " + testimonials[currentTestimonial].name;

}

setInterval(changeTestimonial, 5000);
{
  text: "Excellent service delivery and modern designs. Highly recommended digital agency.",
  name: "Michael K."
}

];

const testimonialText =
document.querySelector(".testimonial-box p");

const testimonialName =
document.querySelector(".testimonial-box h4");

let currentTestimonial = 0;

function changeTestimonial(){

  currentTestimonial++;

  if(currentTestimonial >= testimonials.length){
    currentTestimonial = 0;
  }

  testimonialText.innerText =
  testimonials[currentTestimonial].text;

  testimonialName.innerText =
  "- " + testimonials[currentTestimonial].name;

}

setInterval(changeTestimonial, 5000);  name: "Sarah M."
},

{
  text: "Excellent service delivery and modern designs. Highly recommended digital agency.",
  name: "Michael K."
}

];

const testimonialText =
document.querySelector(".testimonial-box p");

const testimonialName =
document.querySelector(".testimonial-box h4");

let currentTestimonial = 0;

function changeTestimonial(){

  currentTestimonial++;

  if(currentTestimonial >= testimonials.length){
    currentTestimonial = 0;
  }

  testimonialText.innerText =
  testimonials[currentTestimonial].text;

  testimonialName.innerText =
  "- " + testimonials[currentTestimonial].name;

}

setInterval(changeTestimonial, 5000);
 ease;
}

@keyframes fadeUp{

  from{
    opacity:0;
    transform:translateY(40px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}


