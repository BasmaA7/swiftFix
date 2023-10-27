
   /*read more*/
const read = document.querySelector('.readM');
const modalContinair =document.querySelector('.model-continair');
const close = document.querySelector('.close-B');
  read.addEventListener("click", ()=>{
    modalContinair.classList.add('show');
  })
  close.addEventListener("click", ()=>{
  modalContinair .classList.remove("show");
 })