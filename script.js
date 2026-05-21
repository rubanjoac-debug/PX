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
/* ================= ADVANCED HERO ================= */

.hero{
  position:relative;
  overflow:hidden;
}

.hero::before{
  content:'';
  position:absolute;
  width:200%;
  height:200%;
  background:
  radial-gradient(circle,
  rgba(0,140,255,0.18) 0%,
  transparent 60%);

  animation:rotateGlow 18s linear infinite;
}

@keyframes rotateGlow{

  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }

}

/* ================= FLOATING PARTICLES ================= */

.animated-bg{
  position:absolute;
  inset:0;
  overflow:hidden;
  z-index:1;
}

.animated-bg span{
  position:absolute;
  display:block;
  border-radius:50%;
  background:rgba(0,140,255,0.15);
  backdrop-filter:blur(2px);
  animation:floatUp linear infinite;
  bottom:-150px;
}

.animated-bg span:nth-child(1){
  left:10%;
  width:80px;
  height:80px;
  animation-duration:14s;
}

.animated-bg span:nth-child(2){
  left:25%;
  width:40px;
  height:40px;
  animation-duration:10s;
  animation-delay:2s;
}

.animated-bg span:nth-child(3){
  left:45%;
  width:120px;
  height:120px;
  animation-duration:18s;
}

.animated-bg span:nth-child(4){
  left:65%;
  width:70px;
  height:70px;
  animation-duration:12s;
  animation-delay:1s;
}

.animated-bg span:nth-child(5){
  left:80%;
  width:100px;
  height:100px;
  animation-duration:20s;
}

.animated-bg span:nth-child(6){
  left:90%;
  width:50px;
  height:50px;
  animation-duration:11s;
  animation-delay:4s;
}

@keyframes floatUp{

  0%{
    transform:translateY(0) scale(1);
    opacity:0;
  }

  10%{
    opacity:1;
  }

  50%{
    opacity:0.8;
  }

  100%{
    transform:translateY(-1200px) scale(1.4);
    opacity:0;
  }

}

/* ================= HERO CONTENT ================= */

.hero-content{
  position:relative;
  z-index:10;
}

.hero-logo{
  animation:logoFloat 4s ease-in-out infinite;
}

@keyframes logoFloat{

  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-12px);
  }

  100%{
    transform:translateY(0px);
  }

}

.hero h1{
  animation:fadeUp 1.5s ease;
}

.hero p{
  animation:fadeUp 2s ease;
}

.hero-btn{
  animation:fadeUp 2.5s ease;
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

/* ================= HERO LIGHT STREAKS ================= */

.hero::after{
  content:'';
  position:absolute;
  inset:0;
  background:
  linear-gradient(
  120deg,
  transparent 20%,
  rgba(255,255,255,0.08) 40%,
  transparent 60%
  );

  animation:lightMove 8s linear infinite;
}

@keyframes lightMove{

  0%{
    transform:translateX(-100%);
  }

  100%{
    transform:translateX(100%);
  }

    }
