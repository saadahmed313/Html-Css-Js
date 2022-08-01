let section = document.querySelector(".three");
let  pro = document.querySelectorAll(".progress span");
window.onscroll = function()
{
    if(window.scrollY >= section.offsetTop -100)
    {
        pro.forEach((el)=>
       el.style.width = el.dataset.width
        );
    }
    else
    {
        pro.forEach((el)=>
       el.style.width = 0
        );
    }
}