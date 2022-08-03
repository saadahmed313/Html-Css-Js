let tap =document.querySelectorAll("ul li");
let content =document.querySelectorAll(".content > div");
let taps = [...tap];
let contents = [...content];
tap.forEach( function(ele){
ele.addEventListener("click",function (el){
tap.forEach((ele)=>
{
    ele.classList.remove("active");
});
el.currentTarget.classList.add("active");

contents.forEach((ele)=>
{
    ele.style.display ="none";
});
document.querySelector(el.currentTarget.dataset.cont).style.display = "block";
});

})