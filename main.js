const menu= document.querySelector("#menu");
const burger = document.querySelector(".burgermenu");
  burger.addEventListener("click", ()=>{
    menu.classList.toggle("show");
      burger.classList.toggle('active');
      console.log("text");
   });
const navServ = document.querySelector(".left-navbar");
const subselect = document.querySelector(".select-sv");
subselect.addEventListener("click", ()=>{
    navServ.classList.toggle("show");
      subselect.classList.toggle('active');
      console.log("text");
   });
    
   