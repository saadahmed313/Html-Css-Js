let tog = document.querySelector(".toggle");
let  closed =document.querySelector(".close");
let nav = document.querySelector("nav");
tog.onclick = function(){
   
    nav.classList.add("open");
}
closed.onclick = function(){
    nav.classList.remove("open");
};