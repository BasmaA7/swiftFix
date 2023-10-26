const menu= document.querySelector("#menu");
const burger = document.querySelector(".burgermenu");
  burger.addEventListener("click", ()=>{
    menu.classList.toggle("show");
      burger.classList.toggle('active');
      console.log("text");
   });
  
/*
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let parent = document.querySelector(".search");
btn.addEventListener("click", () => {
    parent.classList.toggle("active");
});
 /


/* FAQ section
const button = document.querySelectorAll(".faq-btn");
const body = document.querySelectorAll(".faq-body");
console.log({button});

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", ()=> {
    body[i].classList.toggle("collapse")
  })
}*/

 /*read more*/
const read = document.querySelector('readM');
const close = document.querySelector('close-B');
const modalContinair =document.querySelector('model-continair');

  read.addEventListener("click", ()=>{
    modalContinair.classList.add('show');
  })
  close.addEventListener("click", ()=>{
  modalContinair .classList.remove("show");
 })