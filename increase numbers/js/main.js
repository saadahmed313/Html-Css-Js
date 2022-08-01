let nums = document.querySelectorAll(".nums .num");

let section = document.querySelector(".three");
let start = false;
window.onscroll  =function()
{
    if(window.scrollY >= section.offsetTop)
    {if(!start){
        nums.forEach((el)=>get(el));
    }
    start=true;
}
}

function get(el)
{let goal =el.dataset.goal;
let cler=setInterval(() => {
    el.textContent++;
    if(el.textContent == goal)
    {
        clearInterval(cler);
    }
}, 2000/goal);
}

