window.addEventListener("DOMContentLoaded",()=>{
   const hamburger = document.querySelector(".promo__hamburger");

   hamburger.addEventListener("click",()=>{
      hamburger.classList.toggle("is-active");
   });
});