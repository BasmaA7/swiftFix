/* FAQ section*/
const button = document.querySelectorAll(".faq-btn");
const body = document.querySelectorAll(".faq-body");
console.log({button});

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", ()=> {
    body[i].classList.toggle("collapse")
  })
}