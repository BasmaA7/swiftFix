
 
/* slider */
var slider=document.getElementsByClassName("testimonial")[0];
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var index=0;
prev.addEventListener("click",()=>{
 if(index>0){
   index--;
   carousel();
      
 }
});
next.addEventListener("click",()=>{
 if(index<1){
   index++;
   carousel();
 }
});

function carousel(){
 var slidewidth = -index * 100;
   slider.style.transform = `translateX(${slidewidth}%)`;
}