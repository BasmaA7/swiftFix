const menu= document.querySelector("#menu");
const burger = document.querySelector(".burgermenu");
  burger.addEventListener("click", ()=>{
    menu.classList.toggle("show");
      burger.classList.toggle('active');
      console.log("text");
   });
  

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let parent = document.querySelector(".search");

btn.addEventListener("click", () => {
    parent.classList.toggle("active");
});



const button = document.querySelector(".faq-btn");
const body = document.querySelector(".faq-body");

button.addEventListener("click", () => {
    body.classList.toggle("collapse")
})