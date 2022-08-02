let input= document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxlength =input.maxLength ;
count.innerHTML = maxlength;
input.oninput = function(){

count.innerHTML =maxlength - this.value.length;
progress.style.width =`${(this.value.length*100)/maxlength}%`;
count.innerHTML  == 0? count.classList.add("zero"):count.classList.remove("zero")
}