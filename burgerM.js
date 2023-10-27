/*burger menu*/
const menu= document.querySelector("#menu");
const burger = document.querySelector(".burgermenu");
  burger.addEventListener("click", ()=>{
    menu.classList.toggle("show");
      burger.classList.toggle('active');
      console.log("text");
   });
    
//    /* Icon search*/
//    let input = document.querySelector(".input");
// let btn = document.querySelector(".btn");
// let parent = document.querySelector(".search");
// btn.addEventListener("click", () => {
//     parent.classList.toggle("active");
// });